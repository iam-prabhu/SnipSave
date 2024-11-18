import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const NewUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await NewUser.save();
    const token = jwt.sign({ id: NewUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const userDetails = await User.findById(NewUser._id).select("-password");

    res
      .status(201)
      .json({ token, user: userDetails, message: "User created successfully" });
  } catch (error) {
    console.log("error" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({ token, message: "Logged In successfully" });
  } catch (error) {
    console.log("error" + error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};

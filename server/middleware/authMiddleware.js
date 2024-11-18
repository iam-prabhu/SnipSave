import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.log("No token provided");
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP: No token provided" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = isVerified;
    next();
  } catch (error) {
    console.log("JWT verification error: " + error.message);
    res.status(401).json({ message: "Unauthorized HTTP: Invalid token" });
  }
};

export default authMiddleware;

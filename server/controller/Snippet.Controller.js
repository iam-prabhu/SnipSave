import CodeSnippet from "../models/CodeSnippet.js";
import User from "../models/User.js";

export const addSnippet = async (req, res) => {
  const { title, language, content } = req.body;
  const userId = req.user.userId;
  try {
    const snippet = await CodeSnippet.create({
      title,
      language,
      content,
      author: userId,
    });
    await User.findByIdAndUpdate(userId, { $push: { snippets: snippet._id } });
    res.status(201).json({ message: "Snippet created", snippet });
  } catch (error) {
    res.status(500).json({ message: "Error in creating snippet", error });
  }
};

export const getSnippets = async (req, res) => {
  const { language, username, title } = req.query;

  try {
    const filters = {};
    if (language) {
      const languages = language
        .split(",")
        .map((lang) => new RegExp(lang, "i"));
      filters.language = { $in: languages };
    }
    if (username) {
      const user = await User.findOne({
        username: { $regex: username, $options: "i" },
      });
      filters.author = user._id;
    }
    if (title) filters.title = { $regex: title, $options: "i" };

    const snippets = await CodeSnippet.find(filters).populate(
      "author",
      "username"
    );

    res.status(200).json({ snippets });
  } catch (error) {
    res.status(500).json({ message: "Error fetching snippets", error });
  }
};

export const getUserSnippets = async (req, res) => {
  try {
    const userId = req.user.userId;
    const userSnippets = await CodeSnippet.find({ author: userId });
    res.status(200).json({ snippets: userSnippets });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user snippets", error });
  }
};

export const favouriteSnippet = async (req, res) => {
  const snippetId = req.params.id;
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isFavourite = user.favourites.includes(snippetId);
    if (isFavourite) {
      user.favourites = user.favourites.filter(
        (favouriteId) => favouriteId.toString() !== snippetId.toString()
      );
      await user.save();
      res
        .status(200)
        .json({ message: "Snippet removed from favourites", user });
    } else {
      user.favourites.push(snippetId);
      await user.save();
      res.status(200).json({ message: "Snippet added to favourites", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating favourites", error });
  }
};

export const getFavourites = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).populate("favourites");
    res.status(200).json({ favourites: user.favourites });
  } catch (error) {
    res.status(500).json({ message: "Error fetching favourites", error });
  }
};

export const viewSnippet = async (req, res) => {
  try {
    const snippetId = req.params.id;
    const snippet = await CodeSnippet.findById(snippetId).populate(
      "author",
      "username"
    );
    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }
    res.status(200).json({ snippet });
  } catch (error) {
    res.status(500).json({ message: "Error viewing snippet", error });
  }
};

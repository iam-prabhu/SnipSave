import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    snippets: [{ type: mongoose.Schema.Types.ObjectId, ref: "CodeSnippet" }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "CodeSnippet" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

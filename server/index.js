import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./routes/User.Route.js";
import SnippetRoute from "./routes/Snippet.Route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

try {
  const uri = process.env.DB_URI;
  mongoose.connect(uri);
} catch (error) {
  console.log("server connection error");
}

app.use("/auth", UserRoute);
app.use("/", SnippetRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

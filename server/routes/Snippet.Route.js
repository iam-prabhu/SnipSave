import express from "express";
import {
  addSnippet,
  getSnippets,
  getUserSnippets,
  favouriteSnippet,
  getFavourites,
  viewSnippet,
} from "../controller/Snippet.Controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/snippet", authMiddleware, addSnippet);
router.get("/snippets", authMiddleware, getSnippets);
router.get("/my-snippets", authMiddleware, getUserSnippets);
router.get("/snippet/:id", authMiddleware, viewSnippet);
router.post("/snippet/:id/favourite", authMiddleware, favouriteSnippet);
router.get("/favourites", authMiddleware, getFavourites);

export default router;

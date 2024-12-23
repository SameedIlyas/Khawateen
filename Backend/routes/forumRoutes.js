const express = require("express");
const { createPost, commentOnPost } = require("../controllers/forumController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to create a forum post
router.post("/posts", protect, createPost);

// Route to comment on a forum post
router.post("/posts/:postId/comments", protect, commentOnPost);

module.exports = router;

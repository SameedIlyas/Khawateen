const ForumPost = require("../models/ForumPost");
const ForumComment = require("../models/ForumComment");

exports.createPost = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const post = await ForumPost.create({
            title,
            content,
            tags,
            author: req.user._id,
        });
        res.status(201).json({ success: true, post });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.commentOnPost = async (req, res) => {
    try {
        const { postId, content } = req.body;
        const comment = await ForumComment.create({
            post: postId,
            content,
            author: req.user._id,
        });
        res.status(201).json({ success: true, comment });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

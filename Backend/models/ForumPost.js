const mongoose = require("mongoose");

const forumPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model("ForumPost", forumPostSchema);

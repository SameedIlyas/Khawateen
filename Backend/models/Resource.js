const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    category: { type: String, required: true },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Resource", resourceSchema);

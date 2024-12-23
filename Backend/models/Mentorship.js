const mongoose = require("mongoose");

const mentorshipSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mentee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    topic: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Completed"], default: "Pending" },
    schedule: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Mentorship", mentorshipSchema);

const Mentorship = require("../models/Mentorship");

exports.requestMentorship = async (req, res) => {
    try {
        const { mentor, topic, schedule } = req.body;
        const mentorship = await Mentorship.create({
            mentor,
            mentee: req.user._id,
            topic,
            schedule,
        });
        res.status(201).json({ success: true, mentorship });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getMentorshipRequests = async (req, res) => {
    try {
        const requests = await Mentorship.find({ mentor: req.user._id })
            .populate("mentee", "name email")
            .populate("mentor", "name email");
        res.status(200).json({ success: true, requests });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

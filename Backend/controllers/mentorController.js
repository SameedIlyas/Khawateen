const Mentor = require("../models/Mentor");

const addMentor = async (req, res) => {
    const { name, expertise, email } = req.body;
    try {
        const mentor = await Mentor.create({ name, expertise, email });
        res.status(201).json(mentor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addMentor, getMentors };
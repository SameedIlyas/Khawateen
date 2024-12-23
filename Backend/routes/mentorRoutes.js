const express = require("express");
const { addMentor, getMentors } = require("../controllers/mentorController");
const router = express.Router();

router.post("/", addMentor);
router.get("/", getMentors);

module.exports = router;
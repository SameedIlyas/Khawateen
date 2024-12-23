const express = require("express");
const { requestMentorship, getMentorshipRequests } = require("../controllers/mentorshipController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to request mentorship
router.post("/request", protect, requestMentorship);

// Route to get mentorship requests for the logged-in user
router.get("/requests", protect, getMentorshipRequests);

module.exports = router;

const express = require("express");
const { addResource, getResources } = require("../controllers/resourceController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to add a resource
router.post("/", protect, addResource);

// Route to get all resources
router.get("/", protect, getResources);

module.exports = router;

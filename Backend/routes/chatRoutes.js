const express = require('express');
const Message = require('../models/Message');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Save a new message (with name and role from the token)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { username, role, message } = req.body;

    // Ensure message content exists
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message content is required' });
    }

    // Use name and role from the authenticated user
    const newMessage = new Message({
      username,
      message,
      role, 
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

module.exports = router;

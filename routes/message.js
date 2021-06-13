const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/authGuard");
const Message = require("../model/Message");

router.post("/", authGuard, async (req, res) => {
  try {
    const message = req.body;
    message.postedBy = req.user._id;
    const newMessage = new Message(message);
    await newMessage.save();
    res.status(201).json({
      message: "Posted Successfully",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/authGuard");
const Message = require("../model/Message");

router.get("/locally", async (req, res) => {
  try {
    const sentMessage = await Message.find();

    return res.status(200).json({
      message: "Here Are Sent Messages",
      data: sentMessage,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});


router.post("/locally", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const addMess = await Message.create(req.body);

    return res.status(201).json({
      message: "Message Sent",
      addMess,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        message: messages,
      });
    } else {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
});

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

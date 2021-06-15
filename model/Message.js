const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please Enter Your Name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;

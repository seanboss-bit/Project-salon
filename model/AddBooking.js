const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  cart: {
    type: Array,
    required: [true, "Please Add To Cart"],
    unique: true,
  },
  stylist: {
    type: String,
    required: [true, "PLease Select an Option"],
  },
  price: {
    type: Number,
  },
  dateofreg: {
    type: Date,
    default: Date.now,
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);

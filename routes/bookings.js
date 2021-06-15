const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/authGuard");
const Booking = require("../model/AddBooking");
const { getBookings, addBookings } = require("../controllers/billController");

//
router.route("/admin").get(getBookings).post(addBookings);

router.post("/user", authGuard, async (req, res) => {
  try {
    const booking = req.body;
    booking.customer = req.user._id;
    const newBooking = new Booking(booking);
    await newBooking.save();
    res.status(201).json({
      message: "Booking Successfully",
      data: newBooking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/user", authGuard, async (req, res) => {
  try {
    const booked = await Booking.find({ customer: req.user._id });

    res.status(201).json({
      message: "These Are YOur Bookings",
      data: booked,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

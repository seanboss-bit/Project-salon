const AddBooking = require("../model/AddBooking");
const User = require("../model/User");

const authGuard = require("../middleware/authGuard");

//  @desc GEt all Bookings
//  @route get  /booking
// @access Admins
exports.getBookings = async (req, res, next) => {
  try {
    const addBooking = await AddBooking.find();

    return res.status(200).json({
      message: "Booking Done",
      data: addBooking,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// @dsc to post transaction
// @route post
// @access users
exports.addBookings = async (req, res, next) => {
  try {
    const { cart, stylist, price, name } = req.body;

    const booking = await AddBooking.create(req.body);

    return res.status(201).json({
      message: "Booking Completed Successfully",
      booking,
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
};

// @desc to register user
// route post Requesr
// @access user
exports.addUser = async (req, res, next) => {
  try {
    const validateUser = await User.findOne({ username: req.body.username });
    if (validateUser)
      return res.status(404).json({ error: "User Exist already" });

    const userObject = req.body;
    userObject.dateReg = new Date();
    const newUser = new User(userObject);
    await newUser.save();

    res.status(201).json({
      message: "You Have Been Registered Successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc to login user
// route get Requesr
// @access user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.comparePassword(username, password, res);

    const token = await user.generateAuthToken();

    res.status(200).json({
      message: "Login Successful",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require("express");
const router = express.Router();
const User = require("../model/User");
const authGuard = require("../middleware/authGuard");

const { addUser, loginUser } = require("../controllers/billController");

router.route("/register").post(addUser);
router.route("/login").post(loginUser);

// @desc to get User Profile
// @rooute get
// @ access user
router.get("/profile", authGuard, async (req, res) => {
  try {
    const user = req.User;
    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

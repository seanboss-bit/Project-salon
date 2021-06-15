const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateReg: {
    type: String,
  },
  token: {
    type: String,
  },
});

// Generate User Token
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET);

  user.token = token;
  await user.save();
  return token;
};

// Hashing Password Before Saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Sean Way Of Comparing Password For Login
UserSchema.statics.comparePassword = async (username, password) => {
  const findUsername = await User.findOne({ username });
  if (!findUsername)
    throw Error("Wrong Username or Password");
  const isMatch = await bcrypt.compare(password, findUsername.password);
  if (!isMatch)
   throw Error ("Wrong Username Or Password");
  return findUsername;
};
const User = mongoose.model("User", UserSchema);
module.exports = User;

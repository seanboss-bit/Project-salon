const mongoose = require('mongoose')
const colors = require("colors");

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database Connected'.cyan.bold.underline);
  } catch (error) {
    console.log(error.message.red.bold);

    process.exit(1);
  }
};

module.exports = connectDB;
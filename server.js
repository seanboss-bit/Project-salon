const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./database");
const cors = require("cors");
const booking = require("./routes/bookings");
const user = require("./routes/user");
const message = require("./routes/message");
dotenv.config({ path: "./config/.env" });
const app = express();

connectDB();

// Adding Middle Ware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/booking", booking);
app.use("/user", user);
app.use("/message", message);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode @ port ${PORT}`.blue.bold
  )
);

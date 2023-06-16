require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");
const { errorMiddleware } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/api/v1/bookings", bookingRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
run();
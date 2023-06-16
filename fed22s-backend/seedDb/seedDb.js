require("dotenv").config();
const mongoose = require("mongoose");
const Booking = require("../src/models/Booking");
const { mockBookingData } = require("./bookings");

const populateDbWithMockData = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Booking.deleteMany();

    await Booking.create(mockBookingData);

    console.log("Database successfully populated with test data");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGO_CONNECTION_STRING);

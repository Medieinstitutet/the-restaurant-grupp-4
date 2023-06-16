const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const BookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    default: 1,
    min: 1,
    required: true,
  },
  customer: {
    type: CustomerSchema,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);

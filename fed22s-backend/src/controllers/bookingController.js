const Booking = require("../models/Booking");
const { NotFoundError } = require("../utils/errors");

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find();

  return res.json(bookings);
};

exports.getBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const booking = await Booking.findById(bookingId);

  if (!booking)
    throw new NotFoundError("A booking with that ID does not exist");

  return res.status(200).json(booking);
};

exports.createNewBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);

    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/bookings/${newBooking._id}`
      )
      .status(201)
      .json(newBooking);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const filter = { _id: bookingId };
  const update = {
    date: req.body.date,
    time: req.body.time,
    numberOfGuests: req.body.numberOfGuests,
    customer: req.body.customer,
  };

  const booking = await Booking.findOneAndUpdate(filter, update, { new: true });

  if (!booking)
    throw new NotFoundError("A booking with that ID does not exist");

  return res.json(booking);
};

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  await Booking.findByIdAndDelete(bookingId);

  if (!bookingId)
    throw new NotFoundError("A booking with that ID does not exist");

  return res.sendStatus(204);
};

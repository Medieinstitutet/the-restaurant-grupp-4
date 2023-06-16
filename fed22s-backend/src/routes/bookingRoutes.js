const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createNewBooking,
  deleteBookingById,
  updateBookingById,
} = require("../controllers/bookingController");
const router = express.Router();

// GET - /api/v1/bookings
router.get("/", getAllBookings);
// GET - /api/v1/bookings/:bookingId
router.get("/:bookingId", getBookingById);
// POST - /api/v1/bookings
router.post("/", createNewBooking);
// PUT- /api/v1/bookings/:bookingId
router.put("/:bookingId", updateBookingById);
// DELETE - /api/v1/bookings/:bookingId
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
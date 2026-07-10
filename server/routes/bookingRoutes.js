const express = require("express");
const router = express.Router();

const {
    createBooking,
    getMyBookings,
    cancelBooking
} = require("../controllers/bookingController");

router.post("/create", createBooking);

router.get("/mybookings/:userId", getMyBookings);

router.delete("/cancel/:id", cancelBooking);

module.exports = router;
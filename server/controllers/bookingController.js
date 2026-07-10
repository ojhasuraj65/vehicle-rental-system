const Booking = require("../models/Booking");

// CREATE BOOKING

exports.createBooking = async (req, res) => {

    try {

        const {
            userId,
            vehicle,
            price,
            date,
            paymentId,
            paymentStatus
        } = req.body;

        const booking = await Booking.create({

            userId,
            vehicle,
            price,
            date,
            paymentId,
            paymentStatus

        });

        res.status(201).json({

            message: "Booking Successful",
            booking

        });

    }

    catch (error) {

        console.log(error.message);

        res.status(500).json({

            message: error.message

        });

    }

};


// GET MY BOOKINGS

exports.getMyBookings = async (req, res) => {

    try {

        const { userId } = req.params;

        const bookings = await Booking.find({ userId });

        res.status(200).json(bookings);

    }

    catch (error) {

        console.log(error.message);

        res.status(500).json({

            message: error.message

        });

    }

};


// CANCEL BOOKING

exports.cancelBooking = async (req, res) => {

    try {

        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {

            return res.status(404).json({

                message: "Booking not found"

            });

        }

        res.json({

            message: "Booking Cancelled Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
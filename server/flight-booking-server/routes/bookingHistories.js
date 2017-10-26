const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const utils = require('../shared/utils');

const Booking = require('../models/booking');

router.get('/', function (req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, utils.JWT_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }

        if (req.query.userId) {
            Booking
                .find({ userId: req.query.userId })
                .select({
                    itineraryId: 1,
                    departure: 1,
                    departureDate: 1,
                    departureTime: 1,
                    arrival: 1,
                    arrivalDate: 1,
                    arrivalTime: 1
                })
                .exec((err, bookings) => {
                    if (err) {
                        res.status(500).json(err);
                    }
                    else {
                        res.json(bookings || []);
                    }
                });
        }
        else {
            res.json([]);
        }
    })
});

module.exports = router;

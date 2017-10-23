const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');

function save(booking) {
    booking.save((err, result) => {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json(result);
        }
    });
}

router.get('/:id', function (req, res, next) {
    Booking.findById(req.params.id, (err, booking) => {
        if (err) {
            res.status(500).json(err);
        }
        else if (booking) {
            res.json(booking);
        }
        else {
            res.status(404).json("The booking does not exist.");
        }
    });
});

router.post('/', function (req, res, next) {
    var booking = new Booking({
        itineraryId: req.body.itineraryId,
        date: req.body.date,
        note: req.body.note
    });
    save(booking);
});

router.put('/:id', function (req, res, next) {
    Booking.findByIdAndUpdate(req.params.id, (err, booking) => {
        if (err) {
            res.status(500).json(err);
        }
        else if (booking) {
            booking.itineraryId = req.body.itineraryId;
            booking.date = req.body.date;
            booking.note = req.body.note;
            save(booking);
        }
        else {
            res.status(404).json("The booking does not exist.");
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Booking.findByIdAndRemove(req.params.id, (err, booking) => {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json(true);
        }
    });
});

module.exports = router;

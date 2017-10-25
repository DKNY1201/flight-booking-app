var express = require('express');
var router = express.Router();

const Itinerary = require('../models/itinerary');

router.get('/search', (req, res, next) => {
  const leavingAirportIata = req.query.leavingAirportIata ? req.query.leavingAirportIata : '';
  const goingAirportIata = req.query.goingAirportIata ? req.query.goingAirportIata : '';
  const leavingDate = req.query.leavingDate ? req.query.leavingDate : '';
  const passenger = req.query.passenger ? req.query.passenger : '';

  Itinerary.find({
    $and: [
      {leavingAirportIata: leavingAirportIata},
      {goingAirportIata: goingAirportIata},
      {leavingDate: leavingDate},
      {passenger: {$gte: passenger}}
    ]
  }, (err, itineraries) => {
    if (err) {
      return res.status(500).json({
        title: 'Something went wrong, check the error below',
        error: err
      });
    }

    if (itineraries) {
      return res.status(200).json({
        message: 'Itineraries found',
        data: itineraries
      });
    }

    return res.json({
      message: 'Itineraries not found',
      data: null
    });
  });
});

router.get('/:id', function (req, res, next) {
    Itinerary.findById(req.params.id, (err, itinerary) => {
        if (err) {
            res.status(500).json(err);
        }
        else if (itinerary) {
            res.json(itinerary);
        }
        else {
            res.status(404).json("The itinerary does not exist.");
        }
    });
});

module.exports = router;

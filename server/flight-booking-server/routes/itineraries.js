var express = require('express');
var router = express.Router();

const Itinerary = require('../models/itinerary');

router.get('/search', (req, res, next) => {
  const leavingAirportIata = req.query.leavingAirportIata ? req.query.leavingAirportIata : '';
  const goingAirportIata = req.query.goingAirportIata ? req.query.goingAirportIata : '';
  const startDate = req.query.startDate ? req.query.startDate : '';
  const passenger = req.query.passenger ? req.query.passenger : '';

  console.log(leavingAirportIata,goingAirportIata,startDate,passenger);
  Itinerary.find({
    $and: [
      {leavingAirportIata: leavingAirportIata},
      {goingAirportIata: goingAirportIata},
      {startDate: startDate},
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

module.exports = router;

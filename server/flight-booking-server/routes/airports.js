var express = require('express');
var router = express.Router();

const Airport = require('../models/airport');

router.get('/search/:term', (req, res, next) => {
  const term = req.params.term;
  Airport.find({ $or: [{iata: { '$regex' : term, '$options' : 'i' }}, {name: { '$regex' : term, '$options' : 'i' }}]}, (err, airports) => {
    if (err) {
      return res.status(500).json({
        title: 'Something went wrong, check the error below',
        error: err
      });
    }

    if (airports) {
      return res.status(200).json({
        message: 'Airports found',
        data: airports
      });
    }

    return res.json({
      message: 'Airports not found',
      data: null
    });
  });
});

module.exports = router;

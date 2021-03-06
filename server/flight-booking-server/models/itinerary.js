const mongoose = require('mongoose');

const schema = mongoose.Schema({
  leavingAirportIata: {type: String, required: true},
  goingAirportIata: {type: String, required: true},
  leavingDate: {type: String, required: true},
  passenger: {type: Number, required: true},
  image: {type: String, required: true},
  isFeature: {type: Boolean, required: true},
  flights: [{
    leavingAirport: {
      iata: {type: String, required: true},
      lon: {type: Number, required: true},
      iso: {type: String, required: true},
      status: {type: Boolean, required: true},
      name: {type: String, required: true},
      continent: {type: String, required: true},
      type: {type: String, required: true},
      lat: {type: Number, required: true},
      size: {type: String, required: true},
    },
    goingAirport: {
      iata: {type: String, required: true},
      lon: {type: Number, required: true},
      iso: {type: String, required: true},
      status: {type: Boolean, required: true},
      name: {type: String, required: true},
      continent: {type: String, required: true},
      type: {type: String, required: true},
      lat: {type: Number, required: true},
      size: {type: String, required: true},
    },
    type: {type: String, required: true},
    hasTV: {type: Boolean, required: true},
    hasWifi: {type: Boolean, required: true},
    hasCharger: {type: Boolean, required: true},
    startDate: {type: String, required: true},
    startTime: {type: String, required: true},
    endDate: {type: String, required: true},
    endTime: {type: String, required: true},
    airlines: {type: String, required: true},
    airlinesLogo: {type: String, required: true},
    price: {type: Number, required: true},
    flightCode: {type: String, required: true}
  }]
});

module.exports = mongoose.model('Itinerary', schema);

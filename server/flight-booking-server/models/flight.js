const mongoose = require('mongoose');

const schema = mongoose.Schema({
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
  price: {type: Number, required: true}
});

module.exports = mongoose.model('Flight', schema);

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  iata: {type: String, required: true},
  lon: {type: Number, required: true},
  iso: {type: String, required: true},
  status: {type: Boolean, required: true},
  name: {type: String, required: true},
  continent: {type: String, required: true},
  type: {type: String, required: true},
  lat: {type: Number, required: true},
  size: {type: String, required: true},
});

module.exports = mongoose.model('Airport', schema);

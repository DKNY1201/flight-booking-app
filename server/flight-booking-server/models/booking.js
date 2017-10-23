const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    itineraryId: {type: Number, required: true },
    date: { type: Date, required: true },
    note: { type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Booking', schema);

const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
    note: { type: String }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Booking', schema);

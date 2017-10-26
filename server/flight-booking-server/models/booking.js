const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    itineraryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary', required: true },
    departure: { type: String, required: true },
    departureDate: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrival: { type: String, required: true },
    arrivalDate: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    passenger: {
        gender: { type: String, required: true },
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
        dobMonth: { type: String, required: true },
        dobDay: { type: String, required: true },
        dobYear: { type: String, required: true }
    },
    card: {
        number: { type: String, required: true },
        type: { type: String, required: true },
        expMonth: { type: String, required: true },
        expYear: { type: String, required: true },
        cvv: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    billing: {
        address: { type: String, required: true },
        suite: { type: String },
        city: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String },
        zipCode: { type: String, required: true },
        phoneCode: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        phoneExt: { type: String }
    }
});

module.exports = mongoose.model('Booking', schema);

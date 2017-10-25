const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gender: {type: Boolean, required: true},
  dayOfBirth: {type: Number, required: true},
  monthOfBirth: {type: Number, required: true},
  yearOfBirth: {type: Number, required: true}
});

schema.plugin(mongooseUniqueValidator);

schema.virtual('fullname')
  .get(() => this.firstName + ' ' + this.lastName);

module.exports = mongoose.model('User', schema);

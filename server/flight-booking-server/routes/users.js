var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    gender: req.body.gender,
    dayOfBirth: req.body.dayOfBirth,
    monthOfBirth: req.body.monthOfBirth,
    yearOfBirth: req.body.yearOfBirth
  });
  user.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'Something went wrong, check the error below',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      result: result
    });
  })
})

module.exports = router;

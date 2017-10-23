var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
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
  user.save((err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'Something went wrong, check the error below',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      user: user
    });
  })
});

router.get('/checkemail/:email', (req, res, next) => {
  const email = req.params.email;
  User.findOne({email: email}, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'Something went wrong, check the error below',
        error: err
      });
    }

    if (user) {
      return res.status(200).json({
        uniqueEmail: true
      });
    }

    return res.status(200).json({
      message: 'ok'
    });
  })
})

module.exports = router;

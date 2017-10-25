var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var utils = require('../shared/utils');

const User = require('../models/user');

router.post('/', (req, res, next) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
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

    return res.status(200).json(null);
  })
});

router.post('/signin', function (req, res, next) {
  User.findOne({email: req.body.email}, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    var token = jwt.sign({user: user}, utils.JWT_KEY, {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id,
      username: user.firstName + ' ' + user.lastName
    });
  });
});

router.get('/profile', (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, utils.JWT_KEY, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }

    const returnData = {
      firstName: decoded.user.firstName,
      lastName: decoded.user.lastName,
      gender: decoded.user.gender,
      dayOfBirth: decoded.user.dayOfBirth,
      monthOfBirth: decoded.user.monthOfBirth,
      yearOfBirth: decoded.user.yearOfBirth,
    }

    return res.status(200).json({
      title: 'Decoded token data',
      data: returnData
    });
  })
});

router.post('/profile', (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, utils.JWT_KEY, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }

    User.findOneAndUpdate(
      {_id: decoded.user._id},
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dayOfBirth: req.body.dayOfBirth,
        monthOfBirth: req.body.monthOfBirth,
        yearOfBirth: req.body.yearOfBirth
      },
      {new: true},
      (err, user) => {
        if (err) {
          return res.status(500).json({
            title: 'Something went wrong, check the error below',
            error: err
          });
        }

        var token = jwt.sign({user: user}, utils.JWT_KEY, {expiresIn: 7200});

        return res.status(200).json({
          title: 'Update profile successful',
          token: token,
          userId: user._id,
          username: req.body.firstName + ' ' + req.body.lastName
        });
      }
    )
  })
});

module.exports = router;

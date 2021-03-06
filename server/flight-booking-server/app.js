var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var bookings = require('./routes/bookings');
var bookingHistories = require('./routes/bookingHistories');
var airports = require('./routes/airports');
var itineraries = require('./routes/itineraries');
var utils = require('./shared/utils');

var app = express();

// Connect database
mongoose.connect(utils.MONGO_DB_SERVER_URL);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, HEAD');
  next();
});

// Custom setup
app.enable('case sensitive routing');
app.set('x-powered-by', false);

app.use('/api', index);
app.use('/api/users', users);
app.use('/api/bookings', bookings);
app.use('/api/booking-histories', bookingHistories);
app.use('/api/airports', airports);
app.use('/api/itineraries', itineraries);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

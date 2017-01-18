var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var client = require('twilio')('AC7ee3adb394a07536038398fcd75b4d3d','fefeda2b149aa0e956127368d6cd3a0b');
var connection = require('./config/db').connection;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index 	 = require('./routes/firstpg');
//var login 	 = require('./routes/login');
var register = require('./routes/register');
var app 	 = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',index);
app.use('/register',register);
// catch 404 and forward to error handler
app.use(function(req, res, next)
 {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next)
 {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;

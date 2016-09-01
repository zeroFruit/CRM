var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
/**
* MYSQL
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
   // get config info from
   host     : 'host',
   user     : 'user',
   password : 'password'
});

connection.connect();


//connection.end();
//

var routes  = require('./routes/index');
var auth    = require('./routes/auth');
var users   = require('./routes/users');

var app = express();

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

/**
*  static-file path
*/
app.use("/html",      express.static(path.join(__dirname, '/views')));
app.use("/js",        express.static(path.join(__dirname, '/public/javascripts')));
app.use("/css",       express.static(path.join(__dirname, '/public/css')));
app.use("/bootstrap", express.static(path.join(__dirname, '/public/bootstrap')));


app.use('/', routes);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

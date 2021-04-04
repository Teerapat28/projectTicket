var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var eventRouter = require('./routes/index');
var aboutRouter = require('./routes/index');
var registerRoutor = require('./routes/register');
var queryeventRouter = require('./routes/queryevent');
//test pay and admin if edit can delete//
var paymentRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var editRouter = require('./routes/index');
var reportRouter = require('./routes/report');

//All Show//

var show1Router = require('./routes/index');
var show2Router = require('./routes/index');
var show3Router = require('./routes/index');
var show4Router = require('./routes/index');
var show5Router = require('./routes/index');
var show6Router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', loginRouter);
app.use('/', eventRouter);
app.use('/', aboutRouter);
app.use('/', registerRoutor);
app.use('/', queryeventRouter);
app.use('/', show1Router);
app.use('/', show2Router);
app.use('/', show3Router);
app.use('/', show4Router);
app.use('/', show5Router);
app.use('/', show6Router);
app.use('/', paymentRouter);
app.use('/', adminRouter);
app.use('/', editRouter);
app.use('/', reportRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

const express = require('express');
const errorhandler = require('errorhandler')();

// const path = require('path');
// var favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

// const index = require('./routes/index');
// const users = require('./routes/users');

const app = express();

app.use((req, res, next) => {
   if (req.url === '/') {
       res.end('index');
   } else {
       next();
   }
});

app.use((req, res, next) => {
   if (req.url === '/hello') {
       res.end('hello');
   } else {
       next();
   }
});

app.use((req, res, next) => {
    if(req.url === '/forbidden') {
        next(new Error('jopa'));
    } else {
        next();
    }
});

// middleware for error
// if upper in chain will execute next(new Error('some error message'))
// this middleware will catch it and handle
app.use((err, req, res, next) => {
    if (req.app.get('env') === 'development') {
        return errorhandler(err, req, res, next);
    } else {
        res.send(500, 'Server error!');
    }
});

// view engine setup

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler

// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

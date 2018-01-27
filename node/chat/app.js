const express = require('express');
const errorhandler = require('errorhandler')();
const http = require('http');
const config = require('config');
const log = require('libs/log')(module);
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const index = require('./routes/index');
// const users = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');


http.createServer(app).listen(config.get('port'), () => {
    log.info(`Server is listening on ${config.get('port')}`);
});

// app.use((req, res, next) => {
//    if (req.url === '/') {
//        res.end('index');
//    } else {
//        next();
//    }
// });

// app.use((req, res, next) => {
//    if (req.url === '/hello') {
//        res.end('hello');
//    } else {
//        next();
//    }
// });

// app.use((req, res, next) => {
//     if(req.url === '/forbidden') {
//         next(new Error('jopa'));
//     } else {
//         next();
//     }
// });

// app.use((req, res) => {
//   res.status(404).send('Page Not Found');
// });


// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// express.logger is no longer budled with express
// app.use(app.get('env') === 'dev' ? express.logger('dev') : express.logger('default'));
app.use(bodyParser.json()); //req.body.propName
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.Router());

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Index'
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
    if (req.app.get('env') === 'development') {
        return errorhandler(err, req, res, next);
    } else {
        res.status(500).send('Server error!');
    }
});
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

// module.exports = app;

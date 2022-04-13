var createError = require('http-errors');
const express = require('express');
let session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require("path");
var logger = require('morgan');
const port = 3000;


var indexRouter = require('./src/routes/index');

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(logger('dev'));
app.set("views", path.join(__dirname, "/src/views"));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// server.listen("port", process.env.PORT || 3000);

// const route = require("./src/routes/site");


app.use('/', indexRouter);

// app.listen(port, () => {
//     console.log('portfolio listening at http://localhost:${port}');
// });

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
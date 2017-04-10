var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.use(express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var req_id;

app.get('/people', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/people.html'));
    req_id = req.query.people;
});

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/projects.html'));
    req_id = req.query.projects;
});

app.get('/linegraph', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/linegraph.html'));
    req_id = req.query.projects;
});


app.use(express.static(path.join(__dirname, 'public')));

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


var http = require('http').Server(app)
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log(req_id);
    io.emit('people_query', req_id);
});

var port = process.env.PORT || 3000;
http.listen(port, function() {
    console.log('listening on localhost:3000');
});

module.exports = app;

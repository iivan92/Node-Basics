var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8080;

var cookie = require('cookie-parser');
var session = require('express-session');

app.use(morgan('dev'));
app.use(cookie());
app.use(session({secret: 'basic server',
				saveUninitialized: true,
				resave: true}));

app.use('/', function(req, res) {
	res.send("Hello World!");
	console.log(req.cookies);
	console.log('=============');
	console.log(req.session);
});

app.listen(port);
console.log('Server running on port: ' + port);
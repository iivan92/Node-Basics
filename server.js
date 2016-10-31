var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use('/', function(req, res) {
	res.send("Hello World!");
});

app.listen(port);
console.log('Server running on port: ' + port);
var express = require('express');
var app = express();
var db = require('./db'); 
var fs = require('fs');

var UserController = require('./user/UserController');
app.use('/user', UserController);
app.use('/', function(req, res){
	fs.readFile('./views/index.html',function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

module.exports = app;



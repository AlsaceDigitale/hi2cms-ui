var process = require('process')
var express = require('express');
var app = express();

var port = process.env.PORT

console.info('Listening on port '+port)

//setting middleware
app.use(express.static(__dirname + 'dist')); //Serves resources from public folder


var server = app.listen(port);
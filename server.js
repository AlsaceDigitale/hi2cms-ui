var process = require('process')
var express = require('express');
var app = express();

var port = process.env.PORT
var public_folder = __dirname + '/dist'

console.info('Listening on port '+port)
console.info('Serving files from '+public_folder)

//setting middleware
app.use(express.static(public_folder)); //Serves resources from public folder


var server = app.listen(port);
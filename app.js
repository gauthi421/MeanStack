'use strict'

var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var key = fs.readFileSync(path.join(__dirname, '104.196.202.141.key'));
var cert = fs.readFileSync( path.join(__dirname, '104.196.202.141.cert'));

var options = {
  key: key,
  cert: cert,
};

app.use('/public',express.static(path.join(__dirname, '/public')));
app.use('/public/scripts',express.static(path.join(__dirname, '/public/scripts')));
app.get('/', function(req,res){
res.sendFile(path.join(__dirname +'/public/index.html'));
});

var https = require('https');

var server = https.createServer(options, app).listen('443', function(){
console.log('App listening on port %s', server.address().port);
console.log('App listening on Address %s', server.address().address);
console.log('Press Ctrl c to quit');
});

var http = require('http');
http.createServer(app).listen(80);
var forceSsl = require('express-force-ssl');
app.use(forceSsl);

/*
var server = app.listen(process.env.port || '80', function(){
console.log('App listening on port %s', server.address().port);
console.log('App listening on Address %s', server.address().address);
console.log('Press Ctrl c to quit');
});
*/

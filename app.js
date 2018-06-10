var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
require('./route')(app);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
var server = http.createServer(app);

server.listen(port, () => {
    console.log('listen', port)
})
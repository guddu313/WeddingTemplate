var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

app.post('/public', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
	var message = req.body.message;
    //console.log("post received: %s %s", username, password);
});

http.listen(PORT, function(){
	console.log('Server started!!!');
});
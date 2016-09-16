var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var file = '/index.html'
var port = 3000


app.get('/', function(req, res){
  res.sendFile(__dirname + file);
});

io.on('connection', function(socket){
  	socket.on('chat message', function(msg){
  		console.log('message: ' + msg)
  	})
  })


http.listen(port, function(){
  console.log(`HHTP server up on port: ${port}`);
});
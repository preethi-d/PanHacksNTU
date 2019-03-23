var port = 3000;
var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/*', function(req, res){
    console.log(__dirname + "/" + req.params[0]);
	res.sendFile(__dirname + "/" + req.params[0]);
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});

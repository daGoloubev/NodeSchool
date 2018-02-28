var net = require('net');
var st  = require('strftime');
var server = net.createServer(function(socket) {
	data = st('%Y-%m-%d %H:%M', new Date()) + "\n";
	socket.end(data, 'utf-8');
});
server.listen(process.argv[2]);


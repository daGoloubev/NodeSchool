var http = require('http');
http.get(process.argv[2], function(res){
	//console.log('Got response' + res.statusCode);
	res.on('data', function(data){
		console.log(data);
	}).setEncoding('utf-8');
}).on('error', function(err){
	console.error('Got error: ' + err.message);
});


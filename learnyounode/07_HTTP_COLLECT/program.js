var http = require('http');
var str = "";
http.get(process.argv[2], function(res){
	res.on('data', function(chunk){
		str += chunk; 
	}).setEncoding('utf-8');
	res.on('end', function(){
		console.log(str.length);
		console.log(str);
	});
}).on('error', function(err){
	console.error('GET ERROR: '+err.message);
});

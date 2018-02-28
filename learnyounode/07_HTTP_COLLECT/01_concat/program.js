var cs = require('concat-stream');
var http = require('http');
http.get(process.argv[2], function(res){
	res.pipe(cs(function(data){
		var str = data.toString();
		console.log(str.length);
		console.log(str);
	}));
}).on('error', function(err){
	console.error('GET ERROR: '+err.message);
});

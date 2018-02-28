var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res){
	res.pipe(bl(function(err, data) {
		if(err) {
			console.error(err);
		} else {
			var str = data.toString();
			console.log(str.length);
			console.log(str);
		}
	}));
}).on('error', function(err){
	console.error('Caught an error: '+err.message);
});

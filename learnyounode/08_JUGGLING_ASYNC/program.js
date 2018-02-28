var http = require('http');
var bl = require('bl');
var r = [];
var c = 0;
function printR(arr){
	for(var a in arr){
		console.log(arr[a]);
	}
}
function getHttp(index){
	http.get(process.argv[2+index], function(res){
		res.pipe(bl(function(err, data){
			if(err) return console.error(err);
			r[index] = data.toString();
			c++;
			if(c === 3) { printR(r); };
		}));
	}).on('error', function(err){ console.error(err)});
};

for(var i = 0; i < 3; i++){
	getHttp(i);
}

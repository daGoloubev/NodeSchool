var through = require('through2');
var stream = through(function(b, _, n){
	this.push(b.toString().toUpperCase());
	n();
});
process.stdin.pipe(stream).pipe(process.stdout);

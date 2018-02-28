var fs = require('fs'); 
var path = process.argv[2]; 
var buffer = fs.readFileSync(path);
var str = buffer.toString();
var new_lines = str.split('\n');
console.log(new_lines.length-1);

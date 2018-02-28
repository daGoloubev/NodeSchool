var fs = require('fs');
var sum = undefined;

function getSum(callback){
 fs.readFile(process.argv[2], function done(err, data){
    sum = data.toString().split('\n').length - 1;
    callback();
 });
};

function log(){
  console.log(sum);
};

getSum(log);

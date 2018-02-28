var fs = require('fs');
var p = require('path');
function getResults(callback) {
  fs.readdir(process.argv[2], function(err, list) {
    if(err) {
       console.error(err);
    } else {
       for(var i in list){
	if(p.extname(list[i]).split('.')[1] === process.argv[3]){
	  callback(list[i]);
	}
       }
    }
  });
};
function log(result){
  console.log(result);
}

getResults(log);

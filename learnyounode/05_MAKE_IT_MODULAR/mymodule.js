module.exports = function(path, ext, callback){
  var fs = require('fs');
  var p  = require('path');
  fs.readdir(path, function(err, files){
     if(err) return callback(err);
     var results = [];
     files.forEach(function(file) {
        if(p.extname(file).split('.')[1] === ext){
	  results.push(file);
	}
     });
     callback(null, results);
  });
};

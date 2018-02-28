var m = require('./mymodule');
function log(err, results) {
  if(err) return err;
  results.forEach(function(result){
     console.log(result);
  });
}
m(process.argv[2], process.argv[3], log);

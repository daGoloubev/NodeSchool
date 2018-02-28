var sum = function(argv){
  var tmp = 0;
  for(var i = 2; i < argv.length; i++){
       tmp += Number(argv[i]);
  }
  return tmp;
}

console.log(sum(process.argv));

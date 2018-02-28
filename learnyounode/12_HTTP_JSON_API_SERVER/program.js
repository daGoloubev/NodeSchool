var http = require('http');
var url  = require('url');
function parseTime(t){
	return {
		hour: t.getHours(),
		minute: t.getMinutes(),
		second: t.getSeconds()
		};
}
function unixTime (t){
	return { unixtime: t.getTime() };
}
var server = http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;
	if(/^\/api\/parsetime/.test(req.url)){
		result = parseTime(time);
	} else if(/^\/api\/unixtime/.test(req.url)){
		result = unixTime(time);
	}
	if(result){
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});
server.listen(Number(process.argv[2]));

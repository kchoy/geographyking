var http = require("http");
var url = require("url");
var router = require("./router");

var port = 9001;	//this should be whichever port we want to listen on


function startServer(route){
	function onRequest(request, response){
		var path = url.parse(request.url).pathname;

		route(path, response);
	}

	http.createServer(onRequest).listen(port)
}

startServer(router.route);	//start the server
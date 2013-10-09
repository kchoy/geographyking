//this is where importing of the different page files will go


var handler = {};
//this is where all the different url handler function calls go
handle["/maptest"] = function mapTest(response){
	response.writeHead(200, {"Content-Type": "text/html"});




	response.end()
}





///////this handles the routing of the different pages
function route(path, handle, response){
	if(typeof handle[path] === 'function'){
		handler[path](response);
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Error, Page Not Found");
		response.end();
	}
}

exports.route = route;
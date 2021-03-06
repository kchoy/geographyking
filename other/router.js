var fs = require('fs');

//this is where importing of the different page files will go


var handler = {};
//this is where all the different url handler function calls go
/*handler["/maptest"] = function mapTest(response){
	var buff = fs.readFileSync('./maptest.html');
	var data = buff.toString("utf8", 0, buff.length);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(data);
	response.end();
}*/
handler["/leaflet-0.6.4/leaflet.js"] = function leaflet_js(response){
	var buff = fs.readFileSync('./leaflet-0.6.4/leaflet.js');
	var data = buff.toString("utf8", 0, buff.length);

	//console.log("request made");

	response.writeHead(200, {"Content-Type": "text/javascript"});
	response.write(data);
	response.end();
}
handler["/leaflet-0.6.4/leaflet.css"] = function leaflet_js(response){
	var buff = fs.readFileSync('./leaflet-0.6.4/leaflet.css');
	var data = buff.toString("utf8", 0, buff.length);

	//console.log("request made");

	response.writeHead(200, {"Content-Type": "text/css"});
	response.write(data);
	response.end();
}


handler["getLoc"] = function getLoc(response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(data);
	response.end();
}




handler["/"] = function index(response){
	var buff = fs.readFileSync('./index.html');
	var data = buff.toString("utf8", 0, buff.length)

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(data);
	response.end();
}
handler["/index"] = handler["/"];






///////this handles the routing of the different pages
function route(path, response){
	if(typeof handler[path] === 'function'){
		//console.log("Call for " + path);
		handler[path](response);
	} else {
		//console.log("Call for " + path);
		var fsPath = '.' + path + '.html';
		//console.log(fsPath);
		fs.readFile(fsPath, 'utf8', function read(err, data){
			if (err){
				response.writeHead(404, {"Content-Type": "text/plain"});
				response.write("404 Error, Page Not Found");
			} else {
				response.writeHead(200, {"Content-Type": "text/html"});
				response.write(data);
			}
			response.end();
		});
	}
}

exports.route = route;




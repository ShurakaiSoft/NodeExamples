/**
 * A very simple example of using the "formidable" module for doing file 
 * uploads.
 * 
 */

var formidable = require("formidable"),
	http = require('http'),
	sys = require('sys');

http.createServer(function (req, res) {
	if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
		// parse a file upload
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write("Received upload: \n\n");
			res.end(sys.inspect({fields: fields, files: files}));
		});
		return;
	}
	
	// show a file upload form
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(
		'<form action="/upload" enctype="multipart/form-data"' +
		'method="post">' +
		'<input type="text" name="title"><br>'+
		'<input type="file" name="uplaod" multiple="multiple"><br>' +
		'<input type="submit" value="Upload">' +
		'</form>'
	);
	
}).listen(1337);
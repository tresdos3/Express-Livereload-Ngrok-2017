var express = require('express'),
	path = require('path'),
	livereload = require('livereload'),
	ngrok = require('ngrok'),
    app = express();

app.set('port', 5454); // <== number port

app.use(express.static(path.join(__dirname, 'public'))); //use local files

var server = app.listen(app.get('port'), function() { //create a local server
	// body...
	var port = server.address().port;
	var live = livereload.createServer(); //livereload function
	live.watch(__dirname + "/public");
	ngrok.connect(port,function (err, url){
    	if (err !== null) {
    		console.log('Error');
    	}
      	console.log('your server is in http://localhost:'+port);
    	console.log('Ngrok URL:  '+ url);
    });
});


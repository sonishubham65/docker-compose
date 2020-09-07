var http = require('http');
const fs = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World.......' + req.url);
    res.end();
}).listen(8080);
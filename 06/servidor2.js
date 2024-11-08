const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});   
    res.write('teste de servidor com node\n');
    res.end();
}).listen(8080);

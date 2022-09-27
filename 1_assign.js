let http = require('http');

let fs = require('fs'); 

let crs = fs.createReadStream('index.html','utf-8');

let port = 4444;

let server = http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  crs.pipe(res)
});

server.listen(port, function(){
  console.log("Server is running on port: " , port);
});
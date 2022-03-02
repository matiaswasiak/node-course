const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("<h1>home page</h1>");
  res.end();
});

server.listen(5000);

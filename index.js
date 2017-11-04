import http from "http";

http
    .createServer((require, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Node.js</h1>");
        response.end("<p>Hello World</p>");
    })
    .listen(3000);

console.log("hello world!");


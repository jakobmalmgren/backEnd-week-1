// const http = require("http"); // gamla
import date from "./date.js";
import http from "http"; // nya..

console.log("hej", http);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("hej från vår skapade server");
});

server.listen(7000, () => {
  console.log(" servern körs på http://localhost:7000");
});

const data = date();
console.log(`dagens datum är:${data}`);

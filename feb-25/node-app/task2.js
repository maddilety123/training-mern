const http = require("http");
const fs = require("fs").promises;

const serverJson = http.createServer((request, response) => {
  fs.readFile(__dirname + "/employ.json", "utf8").then((data) => {
    response.setHeader("Content-type", "application/json");
    response.writeHead(200);
    response.end(data);
  });
});
serverJson.listen(9000, "localhost", () => {
  console.log("server is started with port 9000");
});

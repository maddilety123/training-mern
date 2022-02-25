// const http = require("http");
// const fs = require("fs").promises;
// const serverText = http.createServer((request, response) => {
//   response.writeHead(200);
//   response.end("MERN stack developer");
// });
// serverText.listen(9000, "localhost", () => {
//   console.log("server is started with port 9000");
// });

// const serverHtml = http.createServer((request, response) => {
//   fs.readFile(__dirname + "/mern.html").then((data) => {
//     response.writeHead(200);
//     response.end(data);
//   });
// });
// serverHtml.listen(2000, "localhost", () => {
//   console.log("server is started with port 2000");
// });

// const serverJson = http.createServer((request, response) => {
//   fs.readFile(__dirname + "/employ.json", "utf8").then((data) => {
//     response.setHeader("Content-Type", "application/json");
//     response.writeHead(200);
//     response.end(JSON.stringify(data));
//   });
// });
// serverJson.listen(7000, "localhost", () => {
//   console.log("server is started with port 9001");
// });
// // const http = require("http");
// // const fs = require("fs").promises;
// // const path = require("path");

// // const server = http.createServer((request, response) => {
// //   fs.readFile(path.resolve() + "/new.text").then((data) => {
// //     response.setHeader("Content-Type", "application/json");
// //     response.writeHead(200);

// //     response.end(data);
// //   });
// // });

// // server.listen(9000, "localhost", () => {
// //   console.log("server started");
// // });

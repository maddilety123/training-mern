const http = require("http");
const url = require("url");
const { URLSearchParams } = require("url");

const server = http.createServer((req, response) => {
  const reqUrl = url.parse(req.url);
  const queryParams = new URLSearchParams(
    req.url.substring(req.url.indexOf("?"), req.url.length)
  );
  const username = queryParams.get("username");
  const password = queryParams.get("password");

  if (reqUrl.pathname === "/userlogin") {
    if (username === "admin" && password === "123456") {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      response.writeHead(200);
      response.write("Login success");
      response.end();
    } else {
      console.log("wrong");
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      response.writeHead(404);
      response.write("Login failed,Try again");
      response.end();
    }
  }
});

server.listen(4000, "localhost", () => {
  console.log("server is started with port 9000");
});

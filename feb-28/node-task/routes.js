const http = require("http");
const url = require("url");
const { URLSearchParams } = require("url");

const server = http.createServer((req, response) => {
  const pathname = url.parse(req.url).pathname;

  const urlSearchParams = new URLSearchParams(
    req.url.substring(req.url.indexOf("?"), req.url.length)
  );
  const firstNumber = urlSearchParams.get("first");
  const secondNumber = urlSearchParams.get("second");

  const sum = JSON.stringify(parseInt(firstNumber) + parseInt(secondNumber));
  const multiplication = parseInt(firstNumber) * parseInt(secondNumber);
  const subtraction = parseInt(secondNumber) - parseInt(firstNumber);
  const division = parseInt(secondNumber) / parseInt(firstNumber);

  switch (pathname) {
    case "/sum":
      response.writeHead(200);
      response.write(sum);
      response.end();
      break;
    case "/multiply":
      response.end(JSON.stringify(multiplication));
      break;
    case "/subtract":
      response.writeHead(200);
      response.end(JSON.stringify(subtraction));
      break;
    case "/divide":
      response.writeHead(200);
      response.end(JSON.stringify(division));
      break;
    default:
      response.writeHead(404);
      response.end(JSON.stringify({ error: "not found" }));
      break;
  }
});

server.listen(4000, "localhost", () => {
  console.log("server is running with port 9000");
});

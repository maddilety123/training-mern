const express = require("express");
const app = express();
app.use(express.urlencoded());
const athuntication = require("./athuntication");
const productsRoute = require("./productsRoute");

app.use("/jobdost", athuntication);

app.use("/products", productsRoute);

app.listen(4000, () => {
  console.log("server is started with 4000");
});

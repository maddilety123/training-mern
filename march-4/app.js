const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3004" }));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

const morgan = require("morgan");
app.use(morgan("combined"));

const multer = require("multer");
const fileStoarageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, new Date() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStoarageEngine });

const session = require("express-session");

const printRequestUrlAndParams = (req, res, next) => {
  console.log(req.url);
  console.log(req.params.id);
  next();
};

app.post(
  "/users/:id",
  printRequestUrlAndParams,
  upload.single("image"),

  (req, res) => {
    res.status(200);
    res.send("this is server with 9000");
  }
);

app.listen(9000, () => {
  console.log("server started with port 9000");
});

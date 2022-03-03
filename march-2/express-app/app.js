const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const authors = [
  {
    id: 1,
    name: "autho1",
  },
  {
    id: 2,
    name: "author2",
  },
  {
    id: 3,
    name: "author3",
  },
];

const users = [
  {
    id: 1,
    name: "Suraj",
  },
  {
    id: 2,
    name: "Ajay",
  },
  {
    id: 3,
    name: "Apple",
  },
];

const getUser = (id) => {
  const user = users.find((eachuser) => {
    return eachuser.id === parseInt(id);
  });
  return user;
};

app.get("/", (req, response) => {
  response.json({ msg: "Welcome to expressjs" });
  console.log("Welcome to expressjs");
});

app.get("/authors", (req, response) => {
  response.json({ authorslist: authors });
});

app.get("/users/:id", (req, response) => {
  const { id } = req.params;

  response.json(getUser(id));
});

app.listen(4000, () => {
  console.log("express server is started with port 4000");
});

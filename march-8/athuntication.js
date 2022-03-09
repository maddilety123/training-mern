const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
// ;
const id = 0;

const userList = [];

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (email !== "" && password !== "") {
    const newUser = { id: id + 1, email: email, password: password };
    userList.push(newUser);
    res.status(201);
    res.send("signup successfull");
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const loginUser = userList.find((eachuser) => eachuser.email === email);
  if (loginUser !== undefined) {
    if (password === loginUser.password) {
      res.status(200);
      res.send(`login successfull ${email}`);
    }
  }
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = userList.find((eachuser) => eachuser.id === parseInt(id));
  if (user !== undefined) {
    res.status(200);
    res.send(user);
  }
});

module.exports = router;

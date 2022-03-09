const express = require("express");
const app = express();
app.use(express.urlencoded());

let userList = [
  { id: 1, name: "suraj", contact: "810922xxxx", age: 18 },
  { id: 2, name: "ajay", contact: "950922xxxx", age: 28 },
  { id: 3, name: "madhu", contact: "910892xxxx", age: 20 },
];

app.get("/users", (req, res) => {
  res.status(200);
  res.send(JSON.stringify(userList));
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200);
  res.send(
    JSON.stringify(userList.find((eachuser) => eachuser.id === parseInt(id)))
  );
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    userList = userList.filter((eachuser) => eachuser.id !== parseInt(id));
    res.status(200);
    res.send(`user with id  ${id}deleted successfully`);
  }
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (name) {
    userList = userList.map((eachuser) => {
      if (eachuser.id === parseInt(id)) {
        res.send("updated successfully");
        return { ...eachuser, name };
      }
      return eachuser;
    });
  }
});

app.listen(9000, () => {
  console.log("server is started with port 9000");
});

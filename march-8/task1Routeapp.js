const express = require("express");
const app = express();
app.use(express.urlencoded());

let studentsList = [
  { id: 1, name: "suraj", contact: "810922xxxx", age: 18 },
  { id: 2, name: "ajay", contact: "950922xxxx", age: 28 },
  { id: 3, name: "madhu", contact: "910892xxxx", age: 20 },
];

app
  .route("/students")
  .get((req, res) => {
    res.status(200);
    res.send(JSON.stringify(studentsList));
  })
  .post((req, res) => {
    const newUser = req.body;
    if (newUser) {
      studentsList.push(newUser);
      res.status(201);
      res.send("user created successfully");
    }
  });

app
  .route("/students/:id")
  .put((req, res) => {
    const { id } = req.params;
    const newData = req.body;
    studentsList = studentsList.map((eachStudent) => {
      if (eachStudent.id === parseInt(id)) {
        return { ...eachStudent, ...newData };
      }
      return eachStudent;
    });
    res.status(200);
    res.send("updated successfully");
  })
  .delete((req, res) => {
    const { id } = req.params;
    studentsList = studentsList.filter(
      (eachStudent) => eachStudent.id !== parseInt(id)
    );
    res.status(200);
    res.send("user deleted successfully");
  });

app.listen(9000, () => {
  console.log("server is started with port 9000");
});

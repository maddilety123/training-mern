const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.urlencoded());
app.use(cors());

let id = 3;
let object = {
  id: 1,
  name: "suraj",
  age: 20,
  color: "white",
  gender: "male",
};

let store = [
  { id: 1, name: "item1", price: 100 },
  { id: 2, name: "item2", price: 200 },
  { id: 3, name: "item3", price: 300 },
];

app.set("views", path.join(__dirname + "/test"));

app.set("view engine", "ejs");

app
  .route("/items")
  .get((req, res) => {
    res.status(200);
    res.send({ productslist: store });
  })
  .post((req, res) => {
    console.log(req.body);
    if (req.body.len > 0) {
      id = id + 1;
      store = [...store, { ...req.body, id }];
      res.status(201);
      res.send("product created successfully");
    } else {
      res.status(406);
      res.send({ error: "please provide valid details" });
    }
  });

app
  .route("/items/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = store.find(
      (eachProduct) => eachProduct.id === parseInt(id)
    );
    res.status(200);

    res.send({ data: product });
  })
  .delete((req, res) => {
    const { id } = req.params;
    const checkingForProduct = store.find(
      (eachProduct) => eachProduct.id === parseInt(id)
    );
    if (checkingForProduct !== undefined) {
      store = store.filter((eachproduct) => eachproduct.id !== parseInt(id));
      res.status(200);
      res.send({ data: "deleted successfully" });
    } else if (checkingForProduct === undefined) {
      res.status(400);
      res.send(`no products found with this id: ${id}`);
    }
  })
  .patch((req, res) => {
    const { id } = req.params;
    const { body } = req;
    const checkingForProduct = store.find(
      (eachProduct) => eachProduct.id === parseInt(id)
    );
    if (checkingForProduct !== undefined) {
      store = store.map((eachproduct) => {
        if (eachproduct.id === parseInt(id)) {
          return { ...eachproduct, ...body };
        }
        return eachproduct;
      });

      res.status(200);
      res.send("updated successfully");
    } else if (checkingForProduct === undefined) {
      res.status(400);
      res.send(`no products found with this id: ${id}`);
    }
  });

//rendering html page
app.get("/page", (req, res) => {
  res.render("home", { storelist: store, age: 23 });
});

//question-3....get method

app.get("/getobject", (req, res) => {
  res.status(200);
  res.send({ data: object });
});

//question-3....delete method
app.delete("/deleteproperty2", (req, res) => {
  let count = 0;
  if (Object.keys(object).length > 1) {
    for (let i in object) {
      count = count + 1;
      if (count === 2) {
        delete object[i];

        const lenOfObje = Object.keys(object).length;
        res.status(200);

        res.send(`length of object is ${lenOfObje}`);
      }
    }
  } else {
    res.status(406);
    res.send("object has no more than 1 property");
  }
});

app.get("*", (req, res) => {
  res.status(404);
  res.send("not found");
});

app.listen(9000, () => {
  console.log("server is started with port 9000");
});

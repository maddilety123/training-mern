const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());

let id = 3;

let store = [
  { id: 1, name: "item1", price: 100 },
  { id: 2, name: "item2", price: 200 },
  { id: 3, name: "item3", price: 300 },
];

app
  .route("/items")
  .get((req, res) => {
    res.status(200);
    res.send({ productslist: store });
  })
  .post((req, res) => {
    if (Object.keys(req.body).length > 1) {
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

    const product = store.find(
      (eachProduct) => eachProduct.id === parseInt(id)
    );
    if (product !== undefined) {
      res.status(200);

      res.send({ data: product });
    } else if (product === undefined) {
      res.status(406);

      res.send({ eror: "no data found with this id" });
    }
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
  .put((req, res) => {
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

app.get("*", (req, res) => {
  res.status(404);
  res.send("not found");
});

app.listen(9000, () => {
  console.log("server is started with port 9000");
});

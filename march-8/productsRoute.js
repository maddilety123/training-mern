const express = require("express");

const router = express.Router();

let products = [
  { id: 1, name: "shirt", price: 500 },
  { id: 2, name: "pen", price: 10 },
  { id: 3, name: "pant", price: 700 },
];

router.get("/", (req, res) => {
  res.status(200);
  res.send(JSON.stringify(products));
});

router.post("/", (req, res) => {
  products.push(req.body);
  res.status(201);
  res.send("product added successfully");
});

router
  .route("/:id")
  .delete((req, res) => {
    const { id } = req.params;
    products = products.filter((eachpro) => eachpro.id !== parseInt(id));
    res.status(200);
    res.send("deleted successfully");
  })
  .put((req, res) => {
    const { id } = req.params;
    console.log(id);
    products = products.map((eachpro) => {
      if (eachpro.id === parseInt(id)) {
        return { ...eachpro, ...req.body };
      }
      return eachpro;
    });
    res.status(200);
    res.send("updated successfully");
  });

module.exports = router;

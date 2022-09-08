const express = require("express");
const path = require("path");
const app = express();
const products = require("./products");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true );
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/v1/products", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true );
  res.setHeader('Content-Type', 'application/json');
  res.json(products);
});
app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send(`The product is not found of id: ${req.params.id}`);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true );
  res.setHeader('Content-Type', 'application/json');
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
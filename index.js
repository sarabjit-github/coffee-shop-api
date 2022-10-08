const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const products = require("./products");
const { request } = require("express");
const port = process.env.PORT || 4000;

// to prevent cors error when fetching data
app.use(cors());

app.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", true );
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/v1/products", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-Type", "application/json");
  res.json(products);
});
app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send(`The product is not found of id: ${req.params.id}`);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-Type", "application/json");
  res.json(product);
});

app.get(`/api/v1/results`, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-Type", "application/json");

  const searchQueryObj = req.query;
  const { search_query } = searchQueryObj;

  // Search Logic Start
  let searchData = [];
  let searchSingleValueArray = search_query.split("");
  let newSearchSingleValueArray = Array.from(new Set(searchSingleValueArray));
  let newArr = [];
  for (let i = 0; i < newSearchSingleValueArray.length; i++) {
    let filterSearch = products.filter((element) => {
      if (search_query !== "") {
        return element.title
          .toLowerCase()
          .includes(`${newSearchSingleValueArray[i]}`);
      } else {
        return false;
      }
    });
    newArr.push(...filterSearch);
  }
  searchData = Array.from(new Set(newArr));
  // Search Logic End

  if (search_query) {
    res.json(searchData);
  } else {
    const error = "The given search query is not found.";
    res.status(404).send(error)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

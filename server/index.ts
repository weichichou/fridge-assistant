const express = require("express");

const app = express();

const port = 4000;

const items = [
  {
    barcode: "8712800035640",
    name: "drink yogurt",
    "expire date": "2020/08/29",
  },
];
"";

app.get("/", (req, res) => res.redirect("/items"));

app.listen(port, () => console.log(`Listen on port ${port}`));

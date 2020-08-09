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

//app.get("/", (req, res) => res.redirect("/items"));
app.get("/items", (req, res) => {
  res.json({ data: items });
});
app.get("/items/:itemBarcode", (req, res) => {
  const itemBarcode = req.params.barcode;
  const item = items.find((i) => i.barcode == itemBarcode);
  res.json(item);
});

app.listen(port, () => console.log(`Listen on port ${port}`));

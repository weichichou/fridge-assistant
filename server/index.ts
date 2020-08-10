import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./db";
//import { db } from "./db";

const app = express();
sequelize.sync().catch((error) => console.error(error));

app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.send("hello world");
});

const port = 4000;
app.listen(port, () => console.log(`Listen on port ${port}`));

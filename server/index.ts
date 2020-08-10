import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./db";
import { router as itemRouter } from "./router";

const app = express();
sequelize.sync().catch((error) => console.error(error));

app.use(bodyParser.json());
app.use(itemRouter);

const port = 4000;
app.listen(port, () => console.log(`Listen on port ${port}`));

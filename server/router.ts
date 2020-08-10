import { Item } from "./db";
import express from "express";
export const router = express.Router();

// create a new item resource
router.post("/items", (req, res, next) => {
  Item.create(req.body)
    .then((movie) => res.status(201).json(movie))
    .catch(next);
});

// read all items (the collections resource)
router.get("/items", (req, res, next) => {
  Item.findAll()
    .then((list) => res.status(200).send(list))
    .catch(next);
});

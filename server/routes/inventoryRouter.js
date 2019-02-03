const express = require("express");
const Inventory = require("../models/inventory");

const inventoryRouter = express.Router();

// GET all inventories
inventoryRouter
  .route("/")
  .get((req, res) => {
    Inventory.find({}, (err, inventories) => {
      res.json(inventories);
    });
  })
  .post((req, res) => {
    let inventory = new Inventory(req.body);
    inventory.save();
    res.status(201).send(inventory);
  });

inventoryRouter.route("/:inventoryId").get((req, res) => {
  Inventory.findById(req.params.inventoryId, (err, inventory) => {
    res.json(inventory);
  });
});

inventoryRouter.route("/:inventoryId").delete((req, res) => {
  Inventory.findOneAndDelete(req.params.inventoryId, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send("removed");
    }
  });
});

module.exports = inventoryRouter;

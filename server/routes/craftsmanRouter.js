const express = require("express");
const Craftsman = require("../models/craftsman");

const craftsmanRouter = express.Router();
craftsmanRouter.route("/").get((req, res) => {
  Craftsman.find({}, (err, craftsmen) => {
    res.json(craftsmen);
  });
});

module.exports = craftsmanRouter;

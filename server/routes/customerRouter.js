const express = require("express");
const Customer = require("../models/customer");

const customerRouter = express.Router();

// GET all customers
customerRouter
  .route("/")
  .get((req, res) => {
    Customer.find({}, (err, customers) => {
      res.json(customers);
    });
  })
  .post((req, res) => {
    let customer = new Customer(req.body);
    customer.save();
    res.status(201).send(customer);
  });

customerRouter.route("/:customerId").get((req, res) => {
  Customer.findById(req.params.customerId, (err, customer) => {
    res.json(customer);
  });
});

customerRouter.route("/:customerId").delete((req, res) => {
  Customer.findOneAndDelete(req.params.customerId, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send("removed");
    }
  });
});

module.exports = customerRouter;

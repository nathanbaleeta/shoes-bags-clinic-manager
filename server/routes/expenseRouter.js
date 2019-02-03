const express = require("express");
const Expense = require("../models/expense");

const expenseRouter = express.Router();

// GET all expenses
expenseRouter
  .route("/")
  .get((req, res) => {
    Expense.find({}, (err, expenses) => {
      res.json(expenses);
    });
  })
  .post((req, res) => {
    let expense = new Expense(req.body);
    expense.save();
    res.status(201).send(expense);
  });

expenseRouter.route("/:expenseId").get((req, res) => {
  Expense.findById(req.params.expenseId, (err, expense) => {
    res.json(expense);
  });
});

expenseRouter.route("/:expenseId").delete((req, res) => {
  Expense.findOneAndDelete(req.params.expenseId, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send("removed");
    }
  });
});

module.exports = expenseRouter;

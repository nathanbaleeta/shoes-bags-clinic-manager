const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const expenseSchema = new Schema(
  {
    payee: { type: String, required: true },
    amount: { type: Number, required: true },
    item: { type: String },
    comment: { type: String },
    created: { type: Date, default: Date.now }
  },
  { collection: "expenses" }
);

//Export model
module.exports = mongoose.model("expenses", expenseSchema);

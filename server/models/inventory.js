const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const inventorySchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number },
    category: { type: String },
    stock: { type: String },
    created: { type: Date, default: Date.now }
  },
  { collection: "inventories" }
);

//Export model
module.exports = mongoose.model("inventories", inventorySchema);

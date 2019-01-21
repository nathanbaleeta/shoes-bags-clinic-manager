const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date },
    pickUpDate: { type: Date },
    receivedBy: { type: String },
    created: { type: Date, default: Date.now },
    craftsman: {
      type: String,
      ref: "Craftsman",
      required: true
    },
    servicesPurchased: [
      {
        services: [String],
        item: { type: Number },
        unitCost: { type: Number },
        amount: { type: Number }
      }
    ],
    totalAmount: { type: Number },
    payment: { type: Number },
    remarks: { type: String }
  },

  { collection: "customers" }
);

//Export model
module.exports = mongoose.model("customers", customerSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const craftsmanSchema = new Schema(
  {
    firstname: { type: String, required: true, max: 100 },
    lastname: { type: String, required: true, max: 100 }
  },
  { collection: "craftsmen" }
);

// Virtual for crafstman's full name
craftsmanSchema.virtual("fullName").get(function() {
  return this.firstname + ", " + this.lastname;
});

//Export model
module.exports = mongoose.model("Craftsman", craftsmanSchema);

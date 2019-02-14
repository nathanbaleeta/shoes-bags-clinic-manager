const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const customerRouter = require("./routes/customerRouter");
const expenseRouter = require("./routes/expenseRouter");
const inventoryRouter = require("./routes/inventoryRouter");
const userRouter = require("./routes/userRouter");
//const craftsmanRouter = require("./routes/craftsmanRouter");

const app = express();
const port = process.env.PORT || 7000;

// Connecting to the database
//const db = mongoose.connect(process.env.DB_ADDRESS);
const db = mongoose.connect(
  "mongodb://127.0.0.1:27017/serviceDB",
  { useNewUrlParser: true }
);
console.log(mongoose.connection.readyState);

// setting body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use("/api/customers", customerRouter);
app.use("/api/expenses", expenseRouter);
app.use("/api/inventories", inventoryRouter);
app.use("/api/users", userRouter);
//app.use("/api/craftsmen", craftsmanRouter);

// Running the server on preset port
app.listen(port, () => console.log(`Listening on port ${port}...`));

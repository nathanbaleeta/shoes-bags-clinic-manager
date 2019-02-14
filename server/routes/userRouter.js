const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

// GET all users
userRouter
  .route("/")
  .get((req, res) => {
    User.find({}, (err, users) => {
      res.json(users);
    });
  })
  .post((req, res) => {
    let user = new User(req.body);
    user.save();
    res.status(201).send(user);
  });

userRouter.route("/:userId").get((req, res) => {
  User.findById(req.params.userId, (err, user) => {
    res.json(user);
  });
});

userRouter.route("/:userId").delete((req, res) => {
  User.findOneAndDelete(req.params.userId, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send("removed");
    }
  });
});

module.exports = userRouter;

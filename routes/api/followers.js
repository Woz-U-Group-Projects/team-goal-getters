var express = require("express");
var router = express.Router();
let FollowerModel = require("../../models/follower");

router.get("/", function(req, res, next) {
  FollowerModel.find()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newFollower = new FollowerModel();
  newFollower.fname = req.body.fname;
  newFollower.lname = req.body.lname;
  newFollower.email = req.body.email;
  newFollower.save().then(follower => res.json(follower)).catch(error => res.status(400).send(error));
});

module.exports = router;

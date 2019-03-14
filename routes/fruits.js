var express = require("express");
var router = express.Router();
let FruitModel = require("../models/fruit");

router.get("/", function(req, res, next) {
  FruitModel.find()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newFruit = new FruitModel();
  newFruit.name = req.body.name;
  newFruit
    .save()
    .then(fruit => res.json(fruit))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

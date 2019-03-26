var express = require("express");
var router = express.Router();
let InfluencerModel = require("../models/influencer");

router.get("/", function(req, res, next){
    InfluencerModel.find()
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error));
});

router.post("/", function(req, res, next){
    console.log(req.body);
    let newInfluencer = new InfluencerModel();
    newInfluencer.fname = req.body.fname;
    newInfluencer.lname = req.body.lname;
    newInfluencer.email = req.body.email;
    newInfluencer.save()
        .then(influencer => res.json(influencer))
        .catch(error => res.status(400)
        .send(error));
});

module.exports = router;

var express = require("express");
var router = express.Router();
let InfluencerModel = require("../../models/influencer");
const passport = require('passport');
const connectEnsure = require('connect-ensure-login');

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
    newInfluencer.password = req.body.password;
    newInfluencer.username = req.body.username;
    newInfluencer.save()
        .then(influencer => res.json(influencer))
        .catch(error => res.status(400)
        .send(error));
});

module.exports = router;

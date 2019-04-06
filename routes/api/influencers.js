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

// New Influencer Sign up
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

// get route for user's dashboard

router.get("/:username", function(req, res) {
 // display the influencer's dashboard which consists of
 // a list of followers

 let influencerUsername = req.params.username;
 res.send(`Welcome to your dashboard, ${influencerUsername}!`)


});


// influencer login

router.post("/login", function(req, res) {
    // in post login, we want to compare the email that is in the body to
    // the email in the database. If the emails and passwords match, then
    // the user is redirected to their dashboard.
    let influencerUsername = req.body.username;
   // let influencerEmail = req.body.email;
    let influencerPassword = req.body.password;
    if (!influencerUsername || !influencerPassword) {
        console.log("Error -- please enter an email address or password!")
        res.send("Error!")
    } else {
        // redirect the user to their dashboard
        console.log("Success!")
        res.redirect(`/${influencerUsername}`)
    }
}
);

module.exports = router;

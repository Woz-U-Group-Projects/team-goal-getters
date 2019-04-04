var express = require("express");
var router = express.Router();
let InfluencerModel = require("../../models/influencer");
const passport = require('passport');
const connectEnsure = require('connect-ensure-login');
const bcrypt = require('bcrypt');

router.get("/", function(req, res, next){
    InfluencerModel.find()
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error));
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

// from lines 19 - 42, figure out which form of registration of new user is correct:
router.post("/signup", passport.authenticate("local"), function(req, res){
    console.log(req.body);
    let newInfluencer = new InfluencerModel();
    newInfluencer.fname = req.body.fname;
    newInfluencer.lname = req.body.lname;
    newInfluencer.email = req.body.email;
    newInfluencer.password = bcrypt.hashSync(req.body.password, 10);
    newInfluencer.save()
        .then(influencer => res.json(influencer))
        .catch(error => res.status(400)
        .send(error));
});

// app.post("/register", function(req, res){
//     User.register(new User({username:req.body.username}),req.body.password, function(err, user){
//            if(err){
//                 console.log(err);
//                 return res.render('register');
//             } //user stragety
//             passport.authenticate("local")(req, res, function(){
//                 res.redirect("/secret"); //once the user sign up
//            }); 
//         });
//     });
    
/*
router.get('/login', function(req, res) {
    res.json(req.influencer);
});*/

router.post("/login", passport.authenticate("local",{
}),function(req, res){
    res.send("User is "+ req.user.id);
});


router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;

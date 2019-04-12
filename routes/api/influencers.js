var express = require("express");
var router = express.Router();
var InfluencerModel = require("../../models/influencer");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authService = require("../../services/auth");

router.get("/", function(req, res, next){
    InfluencerModel.find()
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error));
});

// New Influencer Sign up creates a new user
router.post("/signup", function(req, res, next){
    console.log(req.body);
    InfluencerModel.create(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json("User successfully created");
            }
        }
    );
});

// login user and return JWT as cookie
// attempt to find the user by their username, if not found then respond 401 unauthorized
router.post("/login", function(req, res) {
    console.log(req.body);
    InfluencerModel.findOne({ username: req.body.username }, function(err, influencerInfo) {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(influencerInfo);
        // make sure we found a user, then compare the passwords
        if (
          influencerInfo &&
          bcrypt.compareSync(req.body.password, influencerInfo.password)
        ) {
          let token = jwt.sign(
            { id: influencerInfo._id, userName: influencerInfo.username },
            "secretkey",
            { expiresIn: "1h" }
          );
          res.cookie("jwt", token);
          res.json("Login successful");
        } else {
          // didn't find the user, or credentials are invalid
          res.status(401);
          console.log("Invalid credentials");
          res.json("Invalid credentials");
        }
      }
    });
});

// find a profile from a user (their user object) based on the received jtw cookie
router.get("/dashboard", authService.verifyUser, function(req, res, next) {
    // authService.verifyUser attaches req.body.userId from the jtw cookie if it's valid
    // find the user by their id
    UserModel.findById(req.body.id, function(err, influencerInfo) {
      if (err) {
        console.log(err);
        res.json("Invalid credentials");
      } else {
        res.send(influencerInfo);
      }
    });
});

// logout
router.get("/logout", function(req, res, next) {
    // set a new jwt cookie that will immediately expire
    res.cookie("jwt", "", { expires: new Date(0) });
    res.json("Logged out");
  });
  
// validate a token
router.get("/validateToken", authService.verifyUser, function(req, res, next) {
    // if there is a token we return true
    // this only happens if verifyUser is passed successfully (validates token)
    res.json(true);
});
  


/* influencer login

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
}); */

/* get route for user's dashboard

router.get("/:username", function(req, res) {
 // display the influencer's dashboard which consists of
 // a list of followers

 let influencerUsername = req.params.username;
 res.send(`Welcome to your dashboard, ${influencerUsername}!`)


}); */

module.exports = router;

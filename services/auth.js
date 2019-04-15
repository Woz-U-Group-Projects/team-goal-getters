const jwt = require("jsonwebtoken");

// middleware method to validate a jwt token
// add this as a second parameter to any requests that need token validatoin

// router.get("route", authService.verifyUser, function(req,res,next){
//   authorized work
// });

var authService = {
  verifyUser: function(req, res, next) {
    let token = req.cookies.jwt;
    // if we have a cookie we can proceed
    if (token) {
      jwt.verify(token, "secretkey", function(err, decoded) {
        if (err) {
          res.json({ status: "error", message: err.message, data: null });
        } else {
          req.body.id = decoded.id;
          next();
        }
      });
    }
  }
};

module.exports = authService;
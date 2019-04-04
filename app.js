var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var models = require('./models');
const passport = require('passport');

var indexRouter = require("./routes/api/index");
var followerRouter = require("./routes/api/followers");
var influencerRouter = require("./routes/api/influencers");

require('./config/passport.js');

var app = express();

// serve the react application
app.use(express.static(path.join(__dirname, "client/build")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// add below code here
app.use(require('express-session')({
  secret: 'crmmme',
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", indexRouter);
app.use("/api/follower", followerRouter);
app.use("/api/influencer", influencerRouter);

var mongoDB = "mongodb://cgxix:kriki5683@ds113866.mlab.com:13866/crmmm-db";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;

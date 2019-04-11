var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var indexRouter = require("./routes/api/index");
var followerRouter = require("./routes/api/followers");
var influencerRouter = require("./routes/api/influencers");

var app = express();

// serve the react application
app.use(express.static(path.join(__dirname, "client/dist/client")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/api/followers", followerRouter);
app.use("/api/influencers", influencerRouter);

var mongoDB = "mongodb://cgxix:kriki5683@ds113866.mlab.com:13866/crmmm-db";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;

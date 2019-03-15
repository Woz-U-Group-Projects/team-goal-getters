var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FollowerSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("Follower", FollowerSchema);

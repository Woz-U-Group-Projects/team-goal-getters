var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InfluencerSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  username: {type: String, required: true},
  password: { type: String, required: true }
});

module.exports = mongoose.model("Influencer", InfluencerSchema);

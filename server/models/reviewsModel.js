const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const reviews = new Schema({
  userEmail: {
    type: String,
    required:true,
  },
  comments: {
    type: String,
    required:true,
  },
});

module.exports = mongoose.model("reviews", reviews);

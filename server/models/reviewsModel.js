const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const reviews = new Schema({
  userEmail: {
    type: String,
    required:true,
  },
  title: {
    type: String,
    required:true,
  },
  rate: {
    type: Number,
    required:true,
  },
  comments: {
    type: String,
    required:true,
  },
  lawyerEmail:{
  type:String,
  required:true
  }
},{timestamps:true});

module.exports = mongoose.model("reviews", reviews);

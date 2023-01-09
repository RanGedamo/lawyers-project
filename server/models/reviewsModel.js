const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const reviews = new Schema({
  userEmail: {
    type: String,
    required:true,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  rate: {
    type: Number,
  },
  comments: {
    type: String,
    required:true,
  },
  lawyerEmail:{
  type:String,
  required:true
  }
},{
  timestamps:true
  });

module.exports = mongoose.model("reviews", reviews);

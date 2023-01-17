const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const lawyer = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [{
    type: mongoose.Types.ObjectId,
    ref:"reviews",
  }],
  imageString:{
    type:String
  },
  price: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  avgReplayTime: {
    type: String,
    required: true,
  },
  workDueTime: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default:true
  },

},{
timestamps:true
});

module.exports = mongoose.model("lawyer", lawyer);


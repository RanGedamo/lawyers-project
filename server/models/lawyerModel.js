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
    address: {
      type: String,
      required: true,
    },
    lat: { 
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [{
    type: mongoose.Types.ObjectId,
    ref:"reviews",
  }], category: [{
    type: mongoose.Types.ObjectId,
    ref:"category",
  }],

  imageString:{
    type:String,
    default:"https://i.pinimg.com/736x/8c/42/fe/8c42fe75fb910ddb30fbf9479038e078--suits-alpha-male.jpg"
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


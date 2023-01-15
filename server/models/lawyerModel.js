const { boolean } = require("joi");
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
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category:[ {
    type: mongoose.Types.ObjectId,
    ref:"category",
    required: true,
  }],
  reviews: [{
    type: mongoose.Types.ObjectId,
    ref:"reviews",
  }],
  image: {
    public_id: {
      type: String,
      default: "cloud img default"
    },
    url: {
      type: String,
      default: "cloud img default"
    }
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
  selectedCover: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
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


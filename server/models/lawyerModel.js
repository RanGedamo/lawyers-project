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
    required: true,
  }],
  image: {
    type: String,
    required: true,
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
  token: {
    type: String,
  },
});

module.exports = mongoose.model("lawyer", lawyer);

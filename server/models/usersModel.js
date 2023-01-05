const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const user = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
},{
  timestamps:true
  });

module.exports = mongoose.model("user", user);

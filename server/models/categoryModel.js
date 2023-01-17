const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const category = new Schema({
  name: {
    type: String,
    required: true,
  },
  categoryImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subCategory: [
    {
      name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
},{
  timestamps:true
  });

module.exports = mongoose.model("category", category);

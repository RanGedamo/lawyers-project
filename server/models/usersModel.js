const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const category = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", category);

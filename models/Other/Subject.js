const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty Detail",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Subject", Subject);

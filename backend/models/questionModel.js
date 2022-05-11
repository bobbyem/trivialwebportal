const mongoose = require("mongoose");

questionSchema = mongoose.Schema(
  {
    category: String,
    question: String,
    answer: String,
    alternatives: [String],
    source: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

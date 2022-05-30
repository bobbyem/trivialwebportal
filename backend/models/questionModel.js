const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

questionSchema = mongoose.Schema(
  {
    category: String,
    question: String,
    answer: String,
    source: String,
    author: {
      id: String,
      name: String,
      email: String,
    },
    showAuthor: Boolean,
    vetted: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

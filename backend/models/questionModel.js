const mongoose = require("mongoose");

questionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    category: String,
    question: String,
    answer: String,
    alternatives: [String],
    source: String,
    vetted: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

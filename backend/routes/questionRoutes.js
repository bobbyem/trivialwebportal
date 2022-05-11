const express = require("express");
const router = express.Router();
const {
  deleteQuestion,
  getQuestions,
  setQuestion,
  updateQuestion,
} = require("../controllers/questionController.js");

router.get("/", getQuestions);

router.post("/", setQuestion);

router.put("/:id", updateQuestion);

router.delete("/:id", deleteQuestion);

module.exports = router;

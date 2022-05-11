const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  deleteQuestion,
  getQuestions,
  setQuestion,
  updateQuestion,
} = require("../controllers/questionController.js");

router.get("/", protect, getQuestions);

router.post("/", protect, setQuestion);

router.put("/:id", protect, updateQuestion);

router.delete("/:id", protect, deleteQuestion);

module.exports = router;

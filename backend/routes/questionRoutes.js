const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  deleteQuestion,
  getQuestions,
  setQuestion,
  updateQuestion,
  getRankings,
  getLatest,
  getStats,
} = require("../controllers/questionController.js");

//Basic CRUD
router.get("/", protect, getQuestions);

router.post("/", protect, setQuestion);

router.put("/:id", protect, updateQuestion);

router.delete("/:id", protect, deleteQuestion);

//Special Routes
router.get("/latest", getLatest);

router.get("/top", getRankings);

router.get("/stats", getStats);

module.exports = router;

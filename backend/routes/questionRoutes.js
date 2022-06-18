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
  getVettedQuestions,
  getVettedHTML,
  getVettedCSS,
  getVettedJavascript,
  getVettedFramework,
  getVettedBackend,
  getVettedHistory,
} = require("../controllers/questionController.js");

//Basic CRUD
router.get("/", getQuestions);

router.post("/", protect, setQuestion);

router.put("/:id", protect, updateQuestion);

router.delete("/:id", protect, deleteQuestion);

//Special Routes
router.get("/latest", getLatest);

router.get("/top", getRankings);

router.get("/stats", getStats);

router.get("/vetted", getVettedQuestions);

//Categories
router.get("/vetted/html", getVettedHTML);

router.get("/vetted/css", getVettedCSS);

router.get("/vetted/javascript", getVettedJavascript);

router.get("/vetted/framework", getVettedFramework);

router.get("/vetted/backend", getVettedBackend);

router.get("/vetted/history", getVettedHistory);

module.exports = router;

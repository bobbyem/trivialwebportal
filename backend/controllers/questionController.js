const asyncHandler = require("express-async-handler");

const Question = require("../models/questionModel");

// @desc Get Qs
// @route GET /api/questions
// @access Public
const getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  res.status(200).json(questions);
});

// @desc Set Q
// @route POST /api/questions
// @access Private
const setQuestion = asyncHandler(async (req, res) => {
  if (!req.body.category || !req.body.question) {
    res.status(400);
    throw new Error("Please add missing data");
  }

  const question = await Question.create({
    category: req.body.category,
    question: req.body.question,
    answer: req.body.answer,
    source: req.body.source,
    author: req.body.author,
    showAuthor: req.body.showAuthor,
    vetted: req.body.vetted,
  });
  res.status(200).json(question);
});

// @desc Update Q
// @route PUT /api/questions/:id
// @access Private
const updateQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);

  if (!question) {
    res.status(400);
    throw new Error("Question not found");
  }

  console.log("Updating question: " + question);

  const updatedQuestion = await Question.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateQuestion);
});

// @desc Delete Q
// @route GET /api/questions/:id
// @access Private
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);

  console.log("Deleting question: " + question);
  if (!question) {
    res.status(400);
    throw new Error("Question not found");
  }
  await question.remove();
  res.status(200).json({ id: req.params.id });
});

// @desc Get latest question
// @route GET /api/latest
// @access Public
const getLatest = asyncHandler(async (req, res) => {
  let question = await Question.findOne().sort({ createdAt: -1 });
  res.status(200).json(question);
});

// @desc Get top ranking
// @route GET /api/top
// @access Public
const getRankings = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  res.status(200).json(questions);
});

// @desc Get statistics
// @route GET /api/stats
// @access Public
const getStats = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  let stats = {
    numQuestions: questions.length,
    categories: {
      html: questions.filter((question) => question.category === "html").length,
      javascript: questions.filter(
        (question) => question.category === "javascript"
      ).length,
      css: questions.filter((question) => question.category === "css").length,
      framework: questions.filter(
        (question) => question.category === "framework"
      ).length,
      backend: questions.filter((question) => question.category === "backend")
        .length,
      history: questions.filter((question) => question.category === "history")
        .length,
    },
  };
  res.status(200).json(stats);
});

// @desc Get ALL vetted Qs
// @route GET /api/questions/vetted
// @access Public
const getVettedQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find({ vetted: true });
  return res.status(200).json(questions);
});

// @desc Get vetted  HTML Qs
// @route GET /api/questions/vetted/html
// @access Public
const getVettedHTML = asyncHandler(async (req, res) => {
  const questions = await Question.find({ vetted: true, category: "html" });
  return res.status(200).json(questions);
});

// @desc Get vetted  CSS Qs
// @route GET /api/questions/vetted/css
// @access Public
const getVettedCSS = asyncHandler(async (req, res) => {
  const questions = await Question.find({ vetted: true, category: "css" });
  return res.status(200).json(questions);
});

// @desc Get vetted  Javascript Qs
// @route GET /api/questions/vetted/javascript
// @access Public
const getVettedJavascript = asyncHandler(async (req, res) => {
  const questions = await Question.find({
    vetted: true,
    category: "javascript",
  });
  return res.status(200).json(questions);
});

// @desc Get vetted  Framwork Qs
// @route GET /api/questions/vetted/framework
// @access Public
const getVettedFramework = asyncHandler(async (req, res) => {
  const questions = await Question.find({
    vetted: true,
    category: "framework",
  });
  return res.status(200).json(questions);
});

// @desc Get vetted  Backend Qs
// @route GET /api/questions/vetted/backend
// @access Public
const getVettedBackend = asyncHandler(async (req, res) => {
  const questions = await Question.find({ vetted: true, category: "backend" });
  return res.status(200).json(questions);
});

// @desc Get vetted  History Qs
// @route GET /api/questions/vetted/history
// @access Public
const getVettedHistory = asyncHandler(async (req, res) => {
  const questions = await Question.find({ vetted: true, category: "history" });
  return res.status(200).json(questions);
});

module.exports = {
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
  getLatest,
  getRankings,
  getStats,
  getVettedQuestions,
  getVettedHTML,
  getVettedCSS,
  getVettedJavascript,
  getVettedFramework,
  getVettedBackend,
  getVettedHistory,
};

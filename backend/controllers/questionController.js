const asyncHandler = require("express-async-handler");

const Question = require("../models/questionModel");

// @desc Get Qs
// @route GET /api/questions
// @access Private
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
    alternatives: req.body.alternatives,
    source: req.body.source,
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

  if (!question) {
    res.status(400);
    throw new Error("Question not found");
  }
  await question.remove();
  res.status(200).json({ message: `Deleted question ${req.params.id}` });
});

module.exports = {
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
};

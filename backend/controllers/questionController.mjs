import expressAsyncHandler from "express-async-handler";
const asyncHandler = expressAsyncHandler();
// @desc Get Qs
// @route GET /api/questions
// @access Private
export const getQuestions = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Here you are" });
});

// @desc Set Q
// @route POST /api/questions
// @access Private
export const setQuestion = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Question" });
});

// @desc Update Q
// @route PUT /api/questions/:id
// @access Private
export const updateQuestion = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update question ${req.params.id}` });
});

// @desc Delete Q
// @route GET /api/questions/:id
// @access Private
export const deleteQuestion = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete question ${req.params.id}` });
});

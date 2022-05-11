import express from "express";
import {
  deleteQuestion,
  getQuestions,
  setQuestion,
  updateQuestion,
} from "../controllers/questionController.mjs";
const router = express.Router();

router.get("/", getQuestions);

router.post("/", setQuestion);

router.put("/:id", updateQuestion);

router.delete("/:id", deleteQuestion);

export default router;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../features/questions/questionSlice";

function QuestionItem({ question }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div className="">
        {new Date(question.createdAt).toLocaleString("en-US")}
      </div>
      <h2>{question.question}</h2>
      <button
        className="close"
        onClick={() => {
          dispatch(deleteQuestion(question._id));
        }}
      >
        X
      </button>
    </div>
  );
}

export default QuestionItem;

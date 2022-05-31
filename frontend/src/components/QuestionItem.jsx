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
      <h3>{question.category.toUpperCase()}</h3>
      <h2>Q: {question.question}</h2>
      <h2>A: {question.answer}</h2>
      <a href={question.source} target="blank">
        Source LINK
      </a>
      <p>{question.vetted ? "Vetted 👍" : "Not yet vetted 👎"}</p>
      <p>Author: {question.author.name}</p>
      <p>{question.showAuthor ? "Wants credit" : "Doesn't want credit"}</p>
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

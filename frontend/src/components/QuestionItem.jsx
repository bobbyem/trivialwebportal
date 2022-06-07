import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import QuestionEdit from "./QuestionEdit";

function QuestionItem({ question }) {
  const [editing, setEditing] = useState(false);

  function hideEdit() {
    setEditing(false);
  }

  return (
    <div className="question">
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
      <div
        onClick={() => {
          setEditing(true);
        }}
      >
        <FaEdit className="btn-fa" />
      </div>
      {editing ? (
        <QuestionEdit question={question} hideEdit={hideEdit} />
      ) : null}
    </div>
  );
}

export default QuestionItem;

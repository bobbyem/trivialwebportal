import React from "react";
import { useSelector } from "react-redux";
import QuestionItem from "./QuestionItem";

function QuestionsContainer() {
  const { filtered } = useSelector((state) => state.questions);

  return (
    <>
      {filtered ? (
        <section className="content">
          {filtered.length > 0 ? (
            <div className="questions">
              {filtered.map((question) => (
                <QuestionItem key={question._id} question={question} />
              ))}
            </div>
          ) : (
            <h3>No questions found</h3>
          )}
        </section>
      ) : null}
    </>
  );
}

export default QuestionsContainer;

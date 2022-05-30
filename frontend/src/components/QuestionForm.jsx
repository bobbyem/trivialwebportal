import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function QuestionForm(props) {
  const dispatch = useDispatch();
  const { user } = props;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [sourceText, setSourceText] = useState("");
  const author = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  const [showAuthor, setShowAuthor] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!questionText || questionText.length < 15) {
      return alert(
        "You must put in a question text that is at least longer than 15 characters 🙄"
      );
    } else if (!answerText || answerText.length < 1) {
      return alert(
        "You must put in a answer text that is at least longer than 2 characters 🙄"
      );
    } else if (!sourceText || sourceText.length < 1) {
      return alert("You must put in a valid source link 🙄");
    }
    // dispatch(
    //   createQuestion({
    //     question: questionText,
    //     answer: answerText,
    //     source: sourceText,
    //     author: author,
    //     showAuthor: showAuthor,
    // vetted: false,
    //   })
    // );
    toast.done("Question Submited Successfully");
    console.log(questionText, answerText, sourceText, author, showAuthor);
    //Clear the inputs
    setAnswerText("");
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="qText">Question</label>
          <input
            type="text"
            name="qText"
            id="qText"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Answer</label>
          <input
            type="text"
            name="aText"
            id="aText"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">Source (http)</label>
          <input
            type="url"
            name="sourceText"
            id="sourceText"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">
            Show Author - (The question will be credited to you)
          </label>
          <input
            type="checkbox"
            name="showAuth"
            id="showAuth"
            value={sourceText}
            onChange={(e) => setShowAuthor(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Question</button>
        </div>
      </form>
    </section>
  );
}

export default QuestionForm;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createQuestion } from "../features/questions/questionSlice";

function QuestionForm(props) {
  const dispatch = useDispatch();
  const { user } = props;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [category, setCategory] = useState("html");
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
    dispatch(
      createQuestion({
        category: category,
        question: questionText,
        answer: answerText,
        source: sourceText,
        author: author,
        showAuthor: showAuthor,
        vetted: false,
      })
    );
    toast("Question Submited Successfully");
    console.log(
      questionText,
      answerText,
      sourceText,
      author,
      showAuthor,
      category
    );
    // Clear the inputs
    setQuestionText("");
    setAnswerText("");
    setSourceText("");
    setShowAuthor(false);
  }

  return (
    <>
      <section className="form">
        <h1>Add a question</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              type="select"
              name="category"
              id="qText"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="framework">Framework</option>
              <option value="backend">Backend</option>
              <option value="history">History</option>
            </select>
          </div>
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
            <label htmlFor="showAuth">
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
            <button className="btn">Add Question</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default QuestionForm;

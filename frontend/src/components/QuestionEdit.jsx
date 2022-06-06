import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../features/questions/questionSlice";

function QuestionEdit(props) {
  const dispatch = useDispatch();
  const {
    _id,
    category,
    question,
    answer,
    source,
    showAuthor,
    vetted,
    createdAt,
    updatedAt,
    author,
  } = props.question;
  //Data to be updated
  const [updateData, setUpdateData] = useState({
    _id,
    category,
    question,
    answer,
    source,
    showAuthor,
    vetted,
  });

  useEffect(() => {
    console.log(updateData);
  }, [updateData]);

  function handleUpdate() {
    let ask = window.confirm("Are you sure you want to update this question?");
    if (ask) {
      update(updateData);
    }
  }

  function update(data) {}

  function handleDelete() {
    let ask = window.confirm("Are you sure you want to delete this question?");
    if (ask) {
      dispatch(deleteQuestion(_id));
      //Hide the edit view
      props.hide();
    }
  }
  return (
    <div className="loadingSpinnerContainer">
      <section className="form question-edit">
        <h1>Edit Question</h1>
        <p>{_id}</p>
        <p>Created at: {createdAt}</p>
        {updatedAt !== createdAt ? <p>Created at: {createdAt}</p> : null}
        <p>Created by: {author.name}</p>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={updateData.category}
            onChange={(e) => {
              setUpdateData({ ...updateData, category: e.target.value });
            }}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">Javascript</option>
            <option value="framework">Framework</option>
            <option value="backend">Backend</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            id="question"
            value={updateData.question}
            onChange={(e) => {
              setUpdateData({ ...updateData, question: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            name="answer"
            id="answer"
            value={updateData.answer}
            onChange={(e) => {
              setUpdateData({ ...updateData, answer: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="credit">Show Author?(get credit)</label>
          <input
            type="checkbox"
            name="credit"
            id="credit"
            checked={updateData.showAuthor}
            onChange={(e) => {
              setUpdateData({ ...updateData, showAuthor: e.target.checked });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vetted">
            Vetted? Questions need to be vetted before they are added to the
            Trivia App
          </label>
          <input
            type="checkbox"
            name="vetted"
            id="vetted"
            checked={updateData.vetted}
            onChange={(e) => {
              setUpdateData({ ...updateData, vetted: e.target.checked });
            }}
          />
        </div>
        <button className="btn" onClick={handleUpdate}>
          <FaCheck />
          Update
        </button>
        <button className="btn" onClick={handleDelete}>
          <FaTrash />
          Delete
        </button>
        <button className="btn" onClick={props.hideEdit}>
          <FaArrowLeft /> Cancel
        </button>
      </section>
    </div>
  );
}

export default QuestionEdit;

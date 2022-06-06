import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionItem from "../components/QuestionItem";
import Spinner from "../components/Spinner";
import {
  getQuestions,
  reset,
  setEditing,
} from "../features/questions/questionSlice";

function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, isLoading, isError, message } = useSelector(
    (state) => state.questions
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    //Check if loged in
    if (!user) {
      navigate("/login");
    }
    //Check if Admin - get questions
    if (user && user.admin) {
      dispatch(getQuestions());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {questions ? (
        <section className="content">
          {questions.length > 0 ? (
            <div className="goals">
              {questions.map((question) => (
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

export default Questions;

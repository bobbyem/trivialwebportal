import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionItem from "../components/QuestionItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { getQuestions, reset } from "../features/questions/questionSlice";
import SearchFilter from "../components/SearchFilter";

function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, filtered, isLoading, isError, message } = useSelector(
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
    //Check if error
    if (isError || message) {
      toast(message);
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  if (filtered.length === 0 && questions) {
    return (
      <>
        <SearchFilter />
        {questions ? (
          <section className="content">
            {questions.length > 0 ? (
              <div className="questions">
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
  return (
    <>
      <SearchFilter />
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

export default Questions;

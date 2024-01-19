import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { getQuestions, reset } from "../features/questions/questionSlice";
import SearchFilter from "../components/SearchFilter";
import QuestionsContainer from "../components/QuestionsContainer";

function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, message } = useSelector(
    (state) => state.questions
  );
  const { user } = useSelector((state) => state.auth);

  //Check states
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

  return (
    <>
      <SearchFilter />
      {isLoading ? <Spinner /> : <QuestionsContainer />}
    </>
  );
}

export default Questions;

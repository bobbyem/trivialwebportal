import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import Spinner from "../components/Spinner";
import { getQuestions, reset } from "../features/questions/questionSlice";
import QuestionItem from "../components/QuestionItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { questions, isLoading, isError, message } = useSelector(
    (state) => state.questions
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    if (user && user.admin) {
      dispatch(getQuestions());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section>
        <h1>Wellcome {user && user.name}</h1>
      </section>
      <h4>Thank you for contributing to this project!😍</h4>
      <p>So far we have: {questions.length} questions</p>
      {user ? <QuestionForm user={user} /> : null}
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

export default Dashboard;

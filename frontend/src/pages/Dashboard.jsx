import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import { getQuestions, reset } from "../features/questions/questionSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // if (user && user.admin) {
    //   dispatch(getQuestions());
    // }
    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, dispatch]);

  return (
    <>
      <section className="fade-in">
        <h1>Wellcome {user && user.name}</h1>
      </section>
      <h4>Thank you for contributing to this project!😍</h4>
      {user ? <QuestionForm user={user} /> : null}
    </>
  );
}

export default Dashboard;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import { getLatest } from "../features/questions/questionSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <>{user ? <QuestionForm user={user} /> : null}</>;
}

export default Dashboard;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{user ? <QuestionForm user={user} /> : null}</>;
}

export default Dashboard;

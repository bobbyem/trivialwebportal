import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionForm from "../components/QuestionForm";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <section>
        <h1>Wellcome {user && user.name}</h1>
      </section>
      <QuestionForm user={user} />
    </>
  );
}

export default Dashboard;

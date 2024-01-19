import {
  FaAt,
  FaEdit,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaFile,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="flex align-center gap-1">
        <Link to="/">Home</Link>
        <p>||</p>
        <a
          href="https://trival-roulette.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trivial Roulette
        </a>
      </div>
      <ul>
        <li>
          <Link to="/contact">
            <FaAt /> Contact
          </Link>
        </li>
        {user && user.admin ? (
          <li>
            <Link to="/questions">
              <FaEdit /> Edit Questions
            </Link>
          </li>
        ) : null}
        {user ? (
          <>
            <li>
              <Link to="/dashboard">
                <FaFile /> Add questions
              </Link>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Nav;

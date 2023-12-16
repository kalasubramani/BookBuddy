import { Link, useLocation } from "react-router-dom";
import "./Navigations.css";
import { useNavigate } from "react-router-dom";

const Navigations = ({ user, setUser, setToken }) => {
  //useLocation hook
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //clear out token,userdata and navigate to home
  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
    setUser({});
    navigate("/");
  };

  return (
    <nav className="navBar">
      <Link
        to="/books"
        className={pathname === "/books" ? "highlight" : "normal"}
      >
        Books <span className="navImg">&#128218;</span>
      </Link>
      {user.email ? (
        <>
          <Link
            to="/account"
            className={pathname === "/account" ? "highlight" : "normal"}
          >
            User <span className="navImg">🙋</span>
          </Link>
          <Link to="/" className="navImgLogout" onClick={logout}>
            Logout<span className="navImgX">&#10060;</span>
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className={pathname === "/login" ? "highlight" : "normal"}
          >
            Login <span className="navImg"> ⚿ </span>
          </Link>

          <Link
            to="/register"
            className={pathname === "/register" ? "highlight" : "normal"}
          >
            Register  <span className="navImg">✍ </span>
          </Link>
        </>
      )}
      <Link
        to="/About"
        className={pathname === "/About" ? "highlight" : "normal"}
      >
        About<span className="navImg"> �</span>
      </Link>
    </nav>
  );
};

export default Navigations;

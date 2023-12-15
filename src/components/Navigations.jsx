import { Link,useLocation } from "react-router-dom";
import './Navigations.css'
import { useNavigate } from "react-router-dom";

const Navigations = ({ user, setUser, setToken }) => {
  //useLocation hook
  const {pathname}= useLocation();
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('token');
    setToken(null)
    setUser({})
    navigate('/')
}

  return (
    <nav className="navBar">
      <Link to="/books" className={pathname==="/books"?'highlight': 'normal'}>Books</Link>
      {user.email ? (
        <span>
          <Link to="/account" className={pathname==="/account"?'highlight': 'normal'}>User</Link>
          <button onClick={() => {logout()}}>Logout</button>
        </span>
          ) : (
        <span>
          <Link to="/login" className={pathname==="/login"?'highlight': 'normal'}>Login</Link>
          <Link to="/register" className={pathname==="/register"?'highlight': 'normal'}>Register</Link>
        </span>              
      )}
       <Link to="/About">About</Link> 
    </nav>
  );
};

export default Navigations;

import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import Books from "./components/Books";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import SuccessRegi from "./components/SuccessRegi";
import Homepage from "./components/Homepage";
import SelectedBook from "./components/SelectedBook";
import "./App.css";
import About from "./components/About";
import { fetchBookList } from "./API";
import Events from "./components/Events";
import SearchABook from "./components/SearchABook";
import Volunteer from "./components/Volunteer";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const attemptLogin = async () => {
      const loggedInToken = window.localStorage.getItem("token");

      if (loggedInToken) {
        const response = await axios.get(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loggedInToken}`,
            },
          }
        );

        setUser(response.data);
      } else {
        throw "no token";
      }
    };
    attemptLogin();
  }, [token]);

  //must run only once on page load, so dependency array must be []
  useEffect(() => {
    const getBookData = async () => {
      const bookList = await fetchBookList();
      setBookList(bookList);
    };
    getBookData();
  }, [token]);

  //clear out token,userdata and navigate to home
  const logout = () => {
    if (user.firstname) {
      window.localStorage.removeItem("token");
      setToken(null);
      setUser({});
      navigate("/");
    }
  };

  return (
    <div className="mainDiv">
      <div className="container">
        {user?.firstname ? (
          <h4>Welcome back, {user.firstname} !</h4>
        ) : (
          <h4>Welcome to our library!</h4>
        )}
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ marginBottom: "0.5em" }}
        >
          Home
        </button>
        {user?.email && (
          <button className="logout" onClick={logout}>
            Logout
          </button>
        )}

        <Routes>
          <Route path="/" element={<Homepage user={user} />} />
          <Route path="/successReg" element={<SuccessRegi />} />
          <Route path="/books" element={<Books bookList={bookList} />} />
          <Route
            path="/books/:id"
            element={<SelectedBook bookList={bookList} user={user} />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={<Account user={user} setToken={setToken} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events user={user} />} />
          <Route path="/search" element={<SearchABook bookList={bookList} />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

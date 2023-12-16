import { useState, useEffect } from "react";
import axios from "axios";
import bookLogo from "./assets/books.png";
import { Routes, Route, Link } from "react-router-dom";
import Navigations from "./components/Navigations";
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

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [bookList, setBookList] = useState([]);

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

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        <Link to="/">Book Buddy</Link>
      </h1>
      <Navigations user={user} setUser={setUser} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage />} />
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
        <Route path="/account" element={<Account user={user} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

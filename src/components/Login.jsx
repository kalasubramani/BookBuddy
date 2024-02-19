import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Typography } from "@mui/material";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        user
      );

      window.localStorage.setItem("token", data.token);

      setToken(data.token);
      navigate("/");
    } catch (error) {
      console.log("login error ", error);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="loginform">
        <Typography>
          Login to Book Buddy using your registered email.
        </Typography>
        <label>
          Email:&nbsp;
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Password:&nbsp;
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        {error ? <p className="warning">{error}</p> : null}
        <button type="submit" className="loginButton">
          Login
        </button>

        <p>
          Are you a new user? Get Started <Link to="/register">here</Link> !
        </p>
      </form>
    </div>
  );
};

export default Login;

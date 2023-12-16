import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        user
      );

      navigate("/successReg");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registerform">
        <label>
          First name:&nbsp;
          <input
            type="text"
            value={firstname}
            maxLength={12}
            minLength={3}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Last Name:&nbsp;
          <input
            type="text"
            value={lastname}
            maxLength={12}
            minLength={3}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Email:&nbsp;
          <input
            type="email"
            value={email}
            maxLength={12}
            minLength={6}
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
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Register;

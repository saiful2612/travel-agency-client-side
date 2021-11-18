import React, { useState } from "react";
import "./Register.css";
import { Link, useLocation, useHistory } from "react-router-dom";
// import { useState } from 'react/cjs/react.development';
import useAuth from "../../Hook/useAuth";

const Register = () => {
  const { handleGoogleSignIn, handleCustomRegistration, setUsername } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogIn = () => {
    handleGoogleSignIn().then((result) => {
      history.push(redirect_uri);
      //const loggedInUser =result.user;
      //setUser(loggedInUser);
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at 6 characters");
      return;
    }
    handleCustomRegistration(email, password, name)
      .then((result) => {
        history.push(redirect_uri);

        //const loggedInUser =result.user;
        //setUser(loggedInUser);
      })
      .catch((error) => {
        const errorMessage =
          "You are Already member of this site. Please Login.";
        setError(errorMessage);
      })
      .finally(() => {
        setUsername(name);
        window.location.reload();
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEMailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form  my-5">
      <div className="login-area  w-25 mx-auto">
        <h3 className="text-center">Please Register</h3>
        <form className="login-box" onSubmit={handleRegistration}>
          <label htmlFor="">Name</label>
          <br />
          <input
            onBlur={handleNameChange}
            type="text"
            required
            className="form-control"
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            onBlur={handleEMailChange}
            type="email"
            required
            className="form-control"
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            required
            className="form-control"
          />
          <br />
          <input
            className="mt-3  btn btn-danger"
            type="submit"
            value="Sign In"
          />
        </form>
        <div className="text-danger">{error}</div>
        <br />
        <p className="text-center">
          Already a member in <span className="medicare">Travelo</span> ? <br />{" "}
          <Link to="/login">
            <button className="btn btn-success mt-3">Go to login</button>
          </Link>
        </p>
        <div className="text-center">
          <p>
            <small>or</small>{" "}
          </p>
          <button className="btn btn-warning" onClick={handleGoogleLogIn}>
            Google Sign In
          </button>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Register;

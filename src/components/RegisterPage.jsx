import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordError = useMemo(
    () => password.length < 5 || password.length > 20,
    [password]
  );
  const usernameError = useMemo(
    () => username.length < 4 || username.length > 20,
    [username]
  );
  const confirmError = useMemo(
    () => confirmPassword !== password || passwordError,
    [confirmPassword, password, passwordError]
  );

  return (
    <div>
      <form>
        <h1 className="container">Register</h1>
        <div className="container">
          <label htmlFor="username">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            aria-describedby="userHelp"
            placeholder="user@example.com"
          />
          <div
            id="userHelp"
            className={usernameError ? "error form-text" : "form-text"}
          >
            Username Must Be between 4 and 20 characters
          </div>
        </div>
        <div className="container">
          <label htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            aria-describedby="userHelp"
          />
          <div
            id="passwordHelp"
            className={passwordError ? "error form-text" : "form-text"}
          >
            Password Must Be between 5 and 20 characters
          </div>
        </div>
        <div className="container">
          <label htmlFor="confirm" className="form-label">
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="confirm"
            aria-describedby="userHelp"
          />
          <div
            id="userHelp"
            className={confirmError ? "error form-text" : "form-text"}
          >
            Passwords Must Match
          </div>
        </div>
        <button
          disabled={confirmError || passwordError || usernameError}
          onClick={(e) => {
            e.preventDefault();
            if (!confirmError && !passwordError && !usernameError) {
              navigate("/login");
            }
          }}
          type="submit"
          className="container"
        >
          Submit
        </button>
        <h6 className="container">
          <NavLink to="/login">Already have an account? Login here</NavLink>
        </h6>
      </form>
    </div>
  );
}

export default RegisterPage;

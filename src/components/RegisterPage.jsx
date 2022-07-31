import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passError = useMemo(
    () => password.length < 5 || password.length > 20,
    [password]
  );
  const userError = useMemo(
    () => username.length < 4 || username.length > 20,
    [username]
  );
  const confirmError = useMemo(
    () => confirmPassword !== password || passError,
    [confirmPassword, password, passError]
  );

  return (
    <div className="d-flex justify-content-center">
      <form className="col-12 col-sm-10 col-md-8 col-lg-6">
        <h1 className="my-3 text-center">Register</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="userHelp"
            placeholder="user@example.com"
          />
          <div
            id="userHelp"
            className={userError ? "error form-text" : "form-text"}
          >
            Username Must Be between 4 and 20 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            aria-describedby="userHelp"
          />
          <div
            id="passwordHelp"
            className={passError ? "error form-text" : "form-text"}
          >
            Password Must Be between 5 and 20 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
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
          disabled={confirmError || passError || userError}
          onClick={(e) => {
            e.preventDefault();
            if (!confirmError && !passError && !userError) {
              navigate("/login");
            }
          }}
          type="submit"
          className="btn btn-dark d-block ms-auto"
        >
          Submit
        </button>
        <h6 className="text-center my-4">
          <NavLink to="/login">Already have an account? Login here</NavLink>
        </h6>
      </form>
    </div>
  );
}

export default RegisterPage;

import React, { useState, useMemo, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(UserContext);

  const passError = useMemo(
    () => password.length < 5 || password.length > 20,
    [password]
  );
  const userError = useMemo(
    () => username.length < 4 || username.length > 20,
    [username]
  );

  return (
    <div className="d-flex justify-content-center">
      <form className="col-12 col-sm-10 col-md-8 col-lg-6">
        <h1 className="text-center">Login</h1>
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
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
          <div className="input-group">
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              aria-describedby="userHelp"
            />
            <button
              className="input-group-text"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((curr) => !curr);
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div
            id="passwordHelp"
            className={passError ? "error form-text" : "form-text"}
          >
            Password Must Be between 5 and 20 characters
          </div>
        </div>

        <button
          disabled={passError || userError}
          onClick={(e) => {
            e.preventDefault();
            if (!passError && !userError) {
              login(username);
              navigate("/search");
            }
          }}
          type="submit"
          className="btn btn-dark d-block ms-auto"
        >
          Submit
        </button>
        <h6 className="text-center my-4">
          <NavLink to="/register">Don't have an account? Register here</NavLink>
        </h6>
      </form>
    </div>
  );
}

export default LoginPage;

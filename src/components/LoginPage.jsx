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
    <div>
      <form>
        <h1 className="container">Login</h1>
        <div className="container">
          <label htmlFor="username">
            Username
          </label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            aria-describedby="userHelp"
            placeholder="username"
          />
          <div
            id="userHelp"
            className={userError ? "error form-text" : "form-text"}
          >
            Username Must Be between 4 and 20 characters
          </div>
        </div>
        <div className="container">
          <label htmlFor="password">
            Password
          </label>
          <div>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              id="password"
              aria-describedby="userHelp"
              placeholder="password"
            />
            <button
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
              navigate("/main");
            }
          }}
          type="submit"
          className="container"
        >
          Submit
        </button>
        <h6 className="container">
          <NavLink to="/register">Don't have an account? Register here</NavLink>
        </h6>
      </form>
    </div>
  );
}

export default LoginPage;

import React, { useState } from "react";
import loginImg from "../../../login.svg";
import Alert from "@material-ui/lab/Alert";

export const Login = ({ containerRef, loginFunc, loginErr }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="LoginSVG" />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="footer">
        <button
          type="button"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            loginFunc(username, password);
          }}
        >
          Login
        </button>
        {loginErr ? <Alert severity="error">{loginErr}</Alert> : null}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import loginImg from "../../../login.svg";
import Alert from "@material-ui/lab/Alert";

export const Login = ({ containerRef, loginFunc }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [usernameErr, setusernameErr] = useState(false)
  const [passwordErr, setpasswordErr] = useState(false)
  const validation = (e) => {
    e.preventDefault();
    if(username === ""){
      setusernameErr(true)
      return;
    }else{setusernameErr(false)}
    if(password === ""){
      setpasswordErr(true)
      return;
    }else{setpasswordErr(false)}
    setusername("")
    setpassword("")
    loginFunc(username, password);
  } 
  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="LoginSVG" />
        </div>
        <form onSubmit={(e) => validation(e)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            {usernameErr ? <Alert severity="error">Username Required</Alert> : null}
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
            {passwordErr ? <Alert severity="error">Password Required</Alert> : null}
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
          <input
          type="submit"
          className="btn"
          onClick={(e) => {
            
          }}
          value="Login"
        />

        </form>
      </div>
      <div className="footer">
      
        
      </div>
    </div>
  );
};

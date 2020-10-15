import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import loginImg from "../../../login.svg";

export const Register = ({ containerRef, registerFunc }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [usernameErr, setusernameErr] = useState(false)
  const [passwordErr, setpasswordErr] = useState(false)
  const [emailErr, setemailErr] = useState(false)
  
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
    if(email === ""){
      setpasswordErr(true)
      return;
    }else{setemailErr(false)}
    setusername("")
    setpassword("")
    setemail("")
    registerFunc(username, email, password);
  } 

  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="LoginSVG" />
        </div>
        <form onSubmit={(e)=>validation(e)}>
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
            <label htmlFor="email">Email</label>
            {emailErr ? <Alert severity="error">Email Required</Alert> : null}
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
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
          value="Register"
        />
        </form>
      </div>
      <div className="footer">
       
        
        
      </div>
    </div>
  );
};

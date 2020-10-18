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
  
  const emailIsValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const passwordValid = () =>{
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  }

  const validation = (e) => {
    e.preventDefault();
    if(!username ||  username.length < 3){
      setusernameErr(true)
      return;
    }else{setusernameErr(false)}

    console.log("CHECK VALID: " + emailIsValid())
    if(!email || !emailIsValid()){
      setemailErr(true)
      return;
    }else{setemailErr(false)}
    

    if(!password || !passwordValid()){
      setpasswordErr(true)
      return;
    }else{setpasswordErr(false)}

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
        {usernameErr ? <Alert severity="error">Username not valid</Alert> : null}
        {emailErr ? <Alert severity="error">Email not valid</Alert> : null}
        {passwordErr ? <Alert severity="error">              
        Password must contain at least 8 characters, including UPPER, lowercase, numbers and special characters</Alert> : null}
      </div>
    </div>
  );
};

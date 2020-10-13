import React from "react";
import AuthenticationForm from "../Authentication/AuthenticationForm";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../actions";
import "../App.scss";
import AbsoluteWrapeer from "../../route/AbsoluteWrapper";

const LoginPage = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const registerClick = (username, email, password) => {
    dispatch(register({ username, email, password }));
  };

  const loginClick = (username, password) => {
    dispatch(login({ username, password }));
  };

  return (
    <AbsoluteWrapeer>
      <div className="page">
        <div className="AuthForm">
          <AuthenticationForm
            loginFunc={loginClick}
            registerFunc={registerClick}
            errMessage={errorMessage}
          />
        </div>
      </div>
    </AbsoluteWrapeer>
  );
};
export default LoginPage;

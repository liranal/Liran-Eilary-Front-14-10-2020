import React from "react";
import AuthenticationForm from "../Authentication/AuthenticationForm";
import { useDispatch } from "react-redux";
import { register, login } from "../../actions";
import AbsoluteWrapeer from "../../route/AbsoluteWrapper";

const LoginPage = () => {
  const dispatch = useDispatch();
  const registerClick = (username, email, password) => {
    dispatch(register({ username, email, password }));
  };

  const loginClick = (username, password) => {
    dispatch(login({ username, password }));
  };

  return (
    <AbsoluteWrapeer>
      <div className="page">
          <AuthenticationForm
            loginFunc={loginClick}
            registerFunc={registerClick}
          />
      </div>
    </AbsoluteWrapeer>
  );
};
export default LoginPage;

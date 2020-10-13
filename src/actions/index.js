import {
  SIGN_IN,
  SIGN_OUT,
  GET_USER_INFO,
  LOGIN_FAILED,
  FETCH_MESSAGES,
  DELETE_MESSAGE,
} from "./types";
import axios from "axios";
import { history } from "../route/history";

export const logout = (dataForLogout) => {
  return { type: SIGN_OUT, payload: { isSignedIn: false, userId: null } };
};

export const register = (dataForRegister) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:40040/api/auth/register",
    dataForRegister
  );
  dispatch({ type: "REGISTER", payload: response.data });
};

export const login = (dataForLogin) => async (dispatch) => {
  try {
    const LoginResponse = await axios.post(
      "http://localhost:40040/api/auth/login",
      dataForLogin
    );
    if (LoginResponse.data.auth) {
      dispatch({ type: SIGN_IN, payload: LoginResponse.data });

      const UserInfoResponse = await axios.get(
        `http://localhost:40040/api/users/${LoginResponse.data.userId}`,
        {
          headers: {
            "x-access-token": LoginResponse.data.token,
          },
        }
      );

      dispatch({ type: GET_USER_INFO, payload: UserInfoResponse.data });
      history.push("/Inbox");
    }
  } catch (err) {
    console.log(err.response);
    if (err.response) {
      dispatch({ type: LOGIN_FAILED, payload: err.response });
    }
  }
};

export const fetch_messages = () => async (dispatch, getState) => {
  let { userId, token } = getState().auth;
  const response = await axios.get(
    `http://localhost:40040/api/message/${userId}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  dispatch({
    type: FETCH_MESSAGES,
    payload: response.data.Messages,
  });
};

export const delete_message = (id) => async (dispatch, getState) => {
  let { token } = getState().auth;
  const response = await axios.delete(
    `http://localhost:40040/api/message/${id}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  if (response) {
    dispatch({
      type: DELETE_MESSAGE,
      payload: id,
    });
  }
};

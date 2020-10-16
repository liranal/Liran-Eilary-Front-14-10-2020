import {
  SIGN_IN,
  SIGN_OUT,
  LOGIN_FAILED,
  FETCH_MESSAGES,
  DELETE_MESSAGE,
  POST_MESSAGE_FAILED,
  CLEAR_ERROR,
  REGISTRATION_FAILED,
  POST_MESSAGE,
  UPDATE_USERNAME,
  UPDATE_USERNAME_SUCCESS,
  REGISTRATION_SUCCESS,
  MESSAGE_POST_SUCCESS,
  CLEAR_MESSAGES,
} from "./types";
import axios from "axios";
import { history } from "../route/history";

export const logout = (dataForLogout) => {
  return { type: SIGN_OUT, payload: { isSignedIn: false, userId: null } };
};

export const clearMessages = () => {
  return {type: CLEAR_MESSAGES};
}

export const clearError = () =>{
  return {type: CLEAR_ERROR}
}

export const register = (dataForRegister) => async (dispatch) => {
  try{
  const response = await axios.post(
    "http://localhost:40040/api/auth/register",
    dataForRegister
  );
  dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
  }catch(err){
    dispatch({type: REGISTRATION_FAILED, payload: err.response})
  }
};

export const login = (dataForLogin) => async (dispatch) => {
  try {
    const LoginResponse = await axios.post(
      "http://localhost:40040/api/auth/login",
      dataForLogin
    );
    if (LoginResponse.data.auth) {
      
      
      const UserInfoResponse = await axios.get(
        `http://localhost:40040/api/users/${LoginResponse.data.userId}`,
        {
          headers: {
            "x-access-token": LoginResponse.data.token,
          },
        }
      );
      dispatch({ type: SIGN_IN, payload: {LoginResponse: LoginResponse.data, UserInfoResponse: UserInfoResponse.data }});
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
  let { userDetails, token } = getState().auth;
  const response = await axios.get(
    `http://localhost:40040/api/message/${userDetails.username}`,
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

export const patch_username = (username) => async(dispatch,getState) => {
  let {token,userId, userDetails} = getState().auth
  let oldUsername = userDetails.username;
  try{
    const UserResponse = await axios.patch(
      `http://localhost:40040/api/users/${userId}`,{username, oldUsername},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    
    dispatch({type: UPDATE_USERNAME,payload: UserResponse.data});
    dispatch({type: UPDATE_USERNAME_SUCCESS})
  }catch(err){
    if (err.response) {
       dispatch({ type: POST_MESSAGE_FAILED, payload: err.response });
     }
    }
  }

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

export const send_message = (msgObj) => async(dispatch, getState) =>{
let { token, userDetails} = getState().auth;
msgObj = {...msgObj, sender: userDetails.username}
try{
  const response = await axios.post(
    `http://localhost:40040/api/message/`,msgObj,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  if (response) {
    dispatch({
      type: POST_MESSAGE,
      payload: msgObj,
    });
    dispatch({type: MESSAGE_POST_SUCCESS})
  }
}catch(err){
   if (err.response) {
      dispatch({ type: POST_MESSAGE_FAILED, payload: err.response });
    }
}
};

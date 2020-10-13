import {
  SIGN_IN,
  SIGN_OUT,
  GET_USER_INFO,
  LOGIN_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
  userDetails: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        token: action.payload.token,
        errorCode: action.payload.status,
        errorMessage: action.payload.statusText,
      };
    case SIGN_OUT:
      return {
        ...state,
        ...action.payload,
        token: null,
        userDetails: null,
        errorCode: action.payload.status,
        errorMessage: action.payload.statusText,
      };
    case GET_USER_INFO:
      return { ...state, userDetails: { ...action.payload } };
    case LOGIN_FAILED:
      console.log(action.payload);
      return {
        ...state,
        errorCode: action.payload.status,
        errorMessage: action.payload.statusText,
      };
    default:
      return state;
  }
};

import {
    CLEAR_ERROR,
    LOGIN_FAILED,
    REGISTRATION_FAILED,
POST_MESSAGE_FAILED
} from "../actions/types";

const INITIAL_STATE={err: false, code: null, msg: null}
export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case POST_MESSAGE_FAILED:
        return {  err: true,code: action.payload.status,
        msg: action.payload.data}
    case LOGIN_FAILED:
      return {err: true, code:action.payload.status, msg: action.payload.statusText}
    case REGISTRATION_FAILED:
      return {
        err: true,
        code: action.payload.status,
        msg: action.payload.data,
      };
    case CLEAR_ERROR:
        return {err:false, code:null, msg:null}
    
    default:
      return state;
  }
};

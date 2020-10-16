import {
    CLEAR_ERROR,
    LOGIN_FAILED,
    REGISTRATION_FAILED,
POST_MESSAGE_FAILED,
UPDATE_USERNAME_SUCCESS,
UPDATE_USERNAME_FAILED,
REGISTRATION_SUCCESS,
MESSAGE_POST_SUCCESS
} from "../actions/types";

const INITIAL_STATE={note:false, err: false, code: null, msg: null}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_MESSAGE_FAILED:
        return {  err: true,code: action.payload.status,
        msg: action.payload.data}
    case LOGIN_FAILED:
      return {err: true, code:action.payload.status, msg: action.payload.statusText}
    case REGISTRATION_SUCCESS:
        return {
          note: true,
          msg: "Registration succeed"
        };
    case REGISTRATION_FAILED:
      return {
        err: true,
        code: action.payload.status,
        msg: action.payload.data,
      };
    case UPDATE_USERNAME_SUCCESS:
      return {
        note: true,
        msg: "Update succeed"
      }
    case UPDATE_USERNAME_FAILED:
        return {
          err: true,
          code: action.payload.status,
          msg: action.payload.data,
        }
    case MESSAGE_POST_SUCCESS:
      return {
        note: true,
        msg: "Message sent"
      }
    case CLEAR_ERROR:
        return {note:false, err:false, code:null, msg:null}
    
    default:
      return state;
  }
};

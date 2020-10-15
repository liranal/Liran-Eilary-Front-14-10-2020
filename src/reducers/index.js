import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ErrorsReducer from "./errorReducer";
import messageReducer from "./messageReducer";
export default combineReducers({
  auth: authReducer,
  messages: messageReducer,
  errors: ErrorsReducer
});

import {
  FETCH_MESSAGES,
  DELETE_MESSAGE,
  POST_MESSAGE,
  CLEAR_MESSAGES,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return [...action.payload];
    case DELETE_MESSAGE:
      return state.filter((msg) => {
        return msg._id !== action.payload;
      });
    case POST_MESSAGE:
      return [...state, action.payload];
    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
};

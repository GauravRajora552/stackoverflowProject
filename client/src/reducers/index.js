import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import sideBar from "./sideBar";
import postReducer from "./post";
export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  sideBar,
  postReducer
});

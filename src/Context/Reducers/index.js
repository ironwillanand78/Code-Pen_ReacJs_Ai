import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import projectReducer from "./projectReducer";
const myReducers = combineReducers({
  user: userAuthReducer,
  projects: projectReducer,
});

export default myReducers;

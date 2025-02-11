import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./Reducers/userAuthReducer";
import projectReducer from "./Reducers/projectReducer";
const Store = configureStore({
  reducer: {
    user: userAuthReducer,
    projects: projectReducer,
  },
});

export default Store;

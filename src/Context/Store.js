import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./Reducers/userAuthReducer";

const Store = configureStore({
  reducer: {
    user: userAuthReducer,
  },
});

export default Store;

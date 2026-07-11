import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

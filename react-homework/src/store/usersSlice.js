import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      const payload = action.payload;
      if (typeof payload === "number") {
        state.list.splice(payload, 1);
      } else {
        state.list = state.list.filter((user) => {
          user.email !== payload;
        });
      }
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;

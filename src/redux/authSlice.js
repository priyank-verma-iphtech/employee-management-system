import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        state.currentUser = foundUser;
      } else {
        state.currentUser = null;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;

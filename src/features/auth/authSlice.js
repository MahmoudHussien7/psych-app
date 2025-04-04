import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;

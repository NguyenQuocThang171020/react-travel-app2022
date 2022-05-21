import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    getAllUser: {
      isLoading: false,
      currentUser: null,
      isError: null,
    },
    login: {
      isLoading: false,
      user: null,
      isError: null,
    },
    register: {
      isLoading: false,
      success: false,
      isError: null,
    },
    logout: {
      isLoading: false,
      isError: null,
    },
  },
  reducers: {
    getAllUserStart: (state) => {
      state.getAllUser.isLoading = true;
    },
    getAllUserSuccess: (state, actions) => {
      state.getAllUser.isLoading = false;
      state.getAllUser.currentUser = actions.payload;
      state.getAllUser.isError = null;
    },
    getAllUserError: (state, actions) => {
      state.getAllUser.isLoading = false;
      state.getAllUser.isError = actions.payload;
    },
    loginStart: (state) => {
      state.login.isLoading = true;
    },
    loginSuccess: (state, actions) => {
      state.login.isLoading = false;
      state.login.user = actions.payload;
      state.login.isError = null;
    },
    loginError: (state, actions) => {
      state.login.isLoading = false;
      state.login.isError = actions.payload;
    },
    registerStart: (state) => {
      state.register.isLoading = true;
    },
    registerSuccess: (state) => {
      state.register.isLoading = false;
      state.register.success = true;
      state.register.isError = null;
    },
    registerError: (state, actions) => {
      state.register.isLoading = false;
      state.register.isError = actions.payload;
    },
    logoutStart: (state) => {
      state.logout.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.logout.isLoading = false;
      state.login.user = null;
      state.logout.isError = null;
    },
    logoutError: (state, actions) => {
      state.logout.isLoading = false;
      state.logout.isError = actions.payload;
    },
  },
});
export const {
  getAllUserStart,
  getAllUserSuccess,
  getAllUserError,
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutError,
  logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;

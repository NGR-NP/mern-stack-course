import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: { username: null, token: null, role: [] },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken } = action.payload;
      const decode = jwtDecode(accessToken);
      console.log(decode.role)
      state.username = username;
      state.token = accessToken;
      state.role = decode.role;
    },
    logOut: (state, action) => {
      state.username = null;
      state.token = null;
      state.role = [];
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUsername = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, payload) => {
      state.token = payload;
    },
    setProfile: (state, payload) => {
      state.profile = payload;
    },
    setTokenAndProfile: (state, payload) => {
      state.token = payload.token;
      state.profile = payload.profile;
    },

    removeTokenAndProfile: (state) => {
      state.token = null;
      state.profile = null;
    },
  },
});

export const { setToken, setProfile, setTokenAndProfile, removeTokenAndProfile } =
  authSlice.actions;

export default authSlice.reducer;

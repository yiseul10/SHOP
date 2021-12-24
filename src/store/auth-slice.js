import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorization: localStorage.getItem("authorization")
    ? localStorage.getItem("authorization")
    : "",
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    addToAuth(state, action) {
      state.authorization = action.payload;
      localStorage.setItem("authorization", action.payload);
    },
    clearAuth(state, action) {
      state.authorization = "";
      localStorage.removeItem("authorization");
    },
  },
});

export const { addToAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;

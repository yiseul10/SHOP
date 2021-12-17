import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authorization: localStorage.getItem('authorization')
    ? JSON.parse(localStorage.getItem('authorization'))
    : ""
};

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    addToAuth(state, action) {
        const auth = {state};
        state.authorization.push(auth);
        localStorage.setItem('authorization',  JSON.stringify(state.authorization));
    },
    clearAuth(state, action) {
        localStorage.removeItem('authorization');
    }
  }
});

export const { addToAuth, clearAuth } =
  authSlice.actions;

export default authSlice.reducer;

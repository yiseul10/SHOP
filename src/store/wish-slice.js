import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    wishList: [],
    quantity: 0
  },
  reducers: {
    addWish: (state, action) => {
      state.wishList.push(action.payload);
      state.quantity += 1;
    },
    removeWish: (state, action) => {
      state.wishList.pop(action.payload);
      state.quantity -= 1;
    },
    clearWish: (state, action) => {
      state.wishList = [];
    }
  }
});

export const { addWish, removeWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;

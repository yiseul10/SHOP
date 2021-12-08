import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    products: [],
    quantity: 0
  },
  reducers: {
    addWish: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    removeWish: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
    }
  }
});

export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;

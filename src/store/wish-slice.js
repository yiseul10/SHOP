import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    products: [],
    quantity: 0
  },
  reducers: {
    addWish: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    }
  }
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;

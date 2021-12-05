import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
      state.total -= action.payload.price * action.payload.quantity;
      // BUG cart가격삭제
    }
  }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

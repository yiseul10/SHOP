import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state, action) => {
      state.products = state.products.filter(
        products => products.id !== action.payload.products.id
      );
    }
  }
});

export const { addProducts, removeProducts } = cartSlice.actions;
export default cartSlice.reducer;

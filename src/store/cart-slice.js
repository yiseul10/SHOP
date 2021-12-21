import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [],
  quantity: 0,
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const pseudoId = new Date().getTime(); // 카트아이템에 대한 아이디

      // const itemIndex = state.products.findIndex(
      //   item => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.products[itemIndex].quantity += 1;
      // } else {
      // FIXMEBUG 컬러값과 사이즈로 비교할 수 있는 방법?
      const tempProduct = { ...action.payload, pseudoId };
      state.products.push(tempProduct);
      state.quantity += 1;
      // }

      localStorage.setItem('products', JSON.stringify(state.products));
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        item => item.pseudoId === action.payload.pseudoId
      );
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          item => item.pseudoId !== action.payload.pseudoId
        );
        state.products = nextproducts;
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      const nextproducts = state.products.filter(
        item => item.pseudoId !== action.payload.pseudoId
      );
      state.products = nextproducts;
      localStorage.setItem('products', JSON.stringify(state.products));
      return state;
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, product) => {
          const { price, quantity } = product;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0
        }
      );
      state.quantity = quantity;
      state.total = total;
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  }
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

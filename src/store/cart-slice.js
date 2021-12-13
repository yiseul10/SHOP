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
      const itemIndex = state.products.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.products.push(tempProduct);
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        item => item.id === action.payload.id
      );
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          item => item.id !== action.payload.id
        );
        state.products = nextproducts;
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      const nextproducts = state.products.filter(
        item => item.id !== action.payload.id
      );
      state.products = nextproducts;
      localStorage.setItem('products', JSON.stringify(state.products));
      return state;
      // state.products.map(product => {
      //   if (product.id === action.payload.id) {
      //     const nextproducts = state.products.filter(
      //       item => item.id !== product.id
      //     );
      //     state.products = nextproducts;
      //   }
      //   return state;
      // });
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

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import wishReducer from './wish-slice';
import dataReducer from './api-call';

export default configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    products: dataReducer
  }
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import wishReducer from "./wish-slice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer
  }
});

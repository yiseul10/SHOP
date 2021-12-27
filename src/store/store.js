import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import wishReducer from "./wish-slice";
import dataReducer from "./api-call";
import addressReducer from "./addressReduce";
import authReducer from "./auth-slice";
import customReducer from "./customNumber-slice";


export default configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    products: dataReducer,
    address: addressReducer,
    authorization: authReducer,
    custom: customReducer,
  },
});

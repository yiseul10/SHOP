import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : [],
  quantity: 0
};

const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    addWish: (state, action) => {
      const wishItem = state.wishList.filter(
        item => item.id === action.payload.id
      );

      if (wishItem) {
        state.wishList.push(action.payload);
        state.quantity += 1;
      }

      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    removeWish: (state, action) => {
      const wishItem = state.wishList.filter(
        item => item.id !== action.payload.id
      );
      state.wishList = wishItem;
      if (wishItem.quantity > 0) state.quantity -= 1;
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
      return state;
    },
    clearWish: (state, action) => {
      state.wishList = [];
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    }
  }
});

export const { addWish, removeWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;

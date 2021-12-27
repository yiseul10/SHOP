import { createSlice } from '@reduxjs/toolkit';

const customSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    uploadImage: 0
  },
  reducers: {
    addCustom: (state, action) => {
      state.uploadImage = action.payload;
    },
    removeCustom: (state, action) => {
      state.uploadImage = action.payload;
    }
  }
});

export const { addCustom, removeCustom } = customSlice.actions;
export default customSlice.reducer;

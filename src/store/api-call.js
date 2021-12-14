import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (keyword = '') => {
    const page = 1;
    const response = await Axios.get(`?page=${page}&product=${keyword}`);
    return response.data.products;
  }
);

const initialState = {
  products: []
};

const dataSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      state.products = payload;
    }
  },
  extraReducers: {
    [fetchProducts.pending]: () => {
      console.log('Pending');
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, products: payload };
    },
    [fetchProducts.rejected]: () => {
      console.log('Rejected!');
    }
  }
});

export const { listProducts } = dataSlice.actions;
export const getAllProducts = state => state.products;
export default dataSlice.reducer;

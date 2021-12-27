import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postCode: "",
  roadName: "",
  detailName: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addressAdd: (state, { payload }) => {
      state.roadName = payload.roadName;
      state.postCode = payload.postCode;
      state.detailName = payload.detailName;
    },
    allReset: (state) => {
      state.postCode = "";
      state.roadName = "";
      state.detailName = "";
    },
  },
});

export const { addressAdd, allReset } = addressSlice.actions;
export const getAllProducts = (state) => state.products;
export default addressSlice.reducer;

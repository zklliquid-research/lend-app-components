import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  payment: false,
  account: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    onOpen(state, action) {
      state.open = action.payload;
    },
    onPayment(state, action) {
      state.payment = action.payload;
    },
    onAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;

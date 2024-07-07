import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  payment: {
    isOpen: false,
    title: "",
  },
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
      state.payment = {
        isOpen: action.payload.isOpen,
        title: action.payload.title,
      };
    },
    onAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;

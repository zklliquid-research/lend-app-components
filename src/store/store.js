import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigation";

const store = configureStore({
  reducer: {
    navigate: navigationSlice.reducer,
  },
});

export default store;

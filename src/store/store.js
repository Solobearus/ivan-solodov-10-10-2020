import { configureStore } from "@reduxjs/toolkit";
import {
  currencySlice,
  itemsSlice,
  snackSlice
} from "./slices";

const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    items: itemsSlice.reducer,
    snack: snackSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import {
  currencySlice,
  itemsSlice
} from "./slices";

const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    items: itemsSlice.reducer,
  },
});

export default store;

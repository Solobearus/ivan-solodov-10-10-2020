import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    USDtoILS: 0,
  },
  reducers: {
    fetchCurrency: async (state, action) => {
      try {
        const result = await fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,NIS');
        return { USDtoILS: result }
      } catch (e) { console.error(e) };
    },
  },
});

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    currentUniqueId: 0,
    items: {},
    recievedItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      const newState = {
        ...state,
        items: { ...state.items, [state.currentUniqueId]: action.payload },
        currentUniqueId: state.currentUniqueId + 1,
      };
      localStorage.setItem("state", JSON.stringify(state));

      return newState;
    },
    recieveItem: (state, action) => {

      const newItems = { ...state.items };
      delete newItems[action.id];

      const newState = {
        ...state,
        items: { ...newItems },
        recievedItems: { ...state.recievedItems, [action.id]: action.payload },
      };
      localStorage.setItem("state", JSON.stringify(state));

      return newState;
    },
  },
});


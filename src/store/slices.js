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

export const snackSlice = createSlice({
  name: "snack",
  initialState: {
    open: false,
    message: '',
  },
  reducers: {
    closeSnack: (state, action) => ({ open: false }),
    openSnack: (state, action) => ({ open: true, message: action.payload.message, })
  }
})

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    currentUniqueId: 0,
    items: {},
    recievedItems: {},
    stores: [
      'Amazon',
      'Ebay',
      'Aliexpress',
    ],
  },
  reducers: {
    initState: (state, action) => action.payload.state,
    addItem: (state, action) => {
      const newState = {
        ...state,
        items: { ...state.items, [state.currentUniqueId]: { ...action.payload, id: state.currentUniqueId } },
        currentUniqueId: state.currentUniqueId + 1,
      };
      localStorage.setItem("state", JSON.stringify(newState));

      return newState;
    },
    recieveItem: (state, action) => {

      const newItems = { ...state.items };
      delete newItems[action.payload.id];

      console.log(`test`)

      const newState = {
        ...state,
        items: { ...newItems },
        recievedItems: { ...state.recievedItems, [action.payload.id]: state.items[action.payload.id] },
      };
      localStorage.setItem("state", JSON.stringify(newState));

      return newState;
    },
  },
});


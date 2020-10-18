import { createSlice } from "@reduxjs/toolkit";


const INTERVAL_FOR_CURRENCY_UPDATE = 1000;

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    USDtoILS: null,
    intervalForCurrencyUpdate: INTERVAL_FOR_CURRENCY_UPDATE,
  },
  reducers: {
    setUSDtoILS: (state, action) => ({ ...state, USDtoILS: action.payload }),
    setIntervalForCurrencyUpdate: (state, action) => ({ ...state, intervalForCurrencyUpdate: action.payload })
  },
});

export const snackSlice = createSlice({
  name: "snack",
  initialState: {
    open: false,
    message: '',
    severity: 'error',
  },
  reducers: {
    closeSnack: (state, action) => ({ ...state, open: false }),
    openSnack: (state, action) => ({ open: true, message: action.payload.message, severity: action.payload.severity ? action.payload.severity : 'error', })
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

      // const items = 
      // const orderedItems = Object.keys(items).sort((a, b) => items[a].date < items[b].date);

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


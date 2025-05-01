// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to store updates and save slices
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

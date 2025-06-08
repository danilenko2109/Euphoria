import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
  },
});

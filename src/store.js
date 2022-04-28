import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import productReducer from "src/pages/Product/product.slice";

const rootReducer = { product: productReducer };

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;

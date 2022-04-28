import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "./../../api/productApi";

export const getProducts = createAsyncThunk(
  "product/getProduct",
  async (payload) => {
    const response = await productApi.getProducts(payload);
    //Save data to local storage
    localStorage.getItem("pagination", response.pagination);
    localStorage.getItem("product", response.data);
    localStorage.getItem("params", response.params);
    //return
    return response;
  }
);

const handleGetProduct = (state, action) => {
  const res = action.payload;
  state.products = res.data;
  state.pagination = res.pagination;
  state.params = res.params;
  localStorage.setItem(
    "pagination",
    JSON.stringify(state.pagination)
  );
  localStorage.setItem("products", JSON.stringify(state.products));
  localStorage.setItem("params", JSON.stringify(state.params));
};

const product = createSlice({
  name: "product",
  initialState: {
    pagination: localStorage.getItem("pagination") || {},
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: handleGetProduct,
  },
});

const productReducer = product.reducer;
export default productReducer;

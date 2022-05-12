import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import productAPI from "../api/productAPI";

export const product = createAsyncThunk("product/list", async () => {
  const data = await productAPI.getProductList();

  localStorage.setItem("productlist", JSON.stringify(data));

  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    productlist: JSON.parse(localStorage.getItem("product")) || [{}],
  },
  reducers: {
    addListProduct(state, action) {
      state.productlist = action.payload;
      localStorage.setItem("productlist", JSON.stringify(action.payload));
    },
  },
  extraReducers: {
    [product.fulfilled]: (state, action) => {
      state.productlist = action.payload;
    },
  },
});

const {reducer, actions} = productSlice;
export const {addListProduct} = actions;
export default reducer;

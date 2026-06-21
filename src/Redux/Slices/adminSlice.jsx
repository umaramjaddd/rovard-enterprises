import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/adminAPI";

// Async thunks
export const fetchCategories = createAsyncThunk("admin/fetchCategories", async () => await api.getCategories());
export const fetchSubCategories = createAsyncThunk("admin/fetchSubCategories", async () => await api.getSubCategories());
export const fetchProducts = createAsyncThunk("admin/fetchProducts", async () => await api.getProducts());

const initialState = {
  categories: [],
  subCategories: [],
  products: [],
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Categories
      .addCase(fetchCategories.pending, (state) => { state.loading = true; })
      .addCase(fetchCategories.fulfilled, (state, action) => { state.loading = false; state.categories = action.payload; })
      .addCase(fetchCategories.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })

      // SubCategories
      .addCase(fetchSubCategories.pending, (state) => { state.loading = true; })
      .addCase(fetchSubCategories.fulfilled, (state, action) => { state.loading = false; state.subCategories = action.payload; })
      .addCase(fetchSubCategories.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })

      // Products
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});

export default adminSlice.reducer;

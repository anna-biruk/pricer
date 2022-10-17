import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

export const getProductsComparisons = createAsyncThunk(
  "productsComparisons/getProductsComparisons",
  async () => {
    const response = await fetch(
      `http://localhost:3000/api/products-comparison`
    );
    return response.json();
  }
);

const ProductsComparisonSlice = createSlice({
  name: "productsComparisons",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductsComparisons.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getProductsComparisons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsComparisons.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectProductsComparisons = (state) =>
  state.productsComparisons.items;

export const ProductsComparisonReducer = ProductsComparisonSlice.reducer;

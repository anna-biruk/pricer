import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_LIST_LIMIT } from "../../constants/products";
import uniqBy from "lodash/uniqBy";

const initialState = {
  items: [],
  selectedItem: null,
  isLoading: false,
  categories: [],
  selectedCategory: null,
};

export const getBelarussianProducts = createAsyncThunk(
  "belarussianProducts/getBelarussianProducts",
  async ({
    limit = PRODUCT_LIST_LIMIT,
    offset = 0,
    search = "",
    type = "",
    category = "",
  } = {}) => {
    let requestString = `http://localhost:3000/api/belarus/products?limit=${limit}&offset=${offset}&search=${search}`;
    if (type) {
      requestString = requestString.concat(`&type=${type}`);
    } else if (category) {
      requestString = requestString.concat(`&category=${category}`);
    }
    const response = await fetch(requestString);
    return response.json();
  }
);
export const getBelarussianProductById = createAsyncThunk(
  "belarussianProducts/getBelarussianProductById",
  async ({ id }) => {
    const response = await fetch(
      `http://localhost:3000/api/belarus/products/${id}`
    );
    return response.json();
  }
);
export const getAllBelCategories = createAsyncThunk(
  "belarussianProducts/getAllBelCategories",
  async () => {
    const response = await fetch(
      `http://localhost:3000/api/belarus/categories`
    );
    return response.json();
  }
);

export const searchProducts = createAsyncThunk(
  "belarussianProducts/searchProducts",
  async ({ search = "", limit = 200 } = {}) => {
    const response = await fetch(
      `http://localhost:3000/api/belarus/products?limit=${limit}&search=${search}`
    );
    return response.json();
  }
);

const BelarussianProductsSlice = createSlice({
  name: "belarussianProducts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getBelarussianProducts.fulfilled, (state, action) => {
        if (action.meta.arg.type) {
          state.items = action.payload;
        } else {
          state.items = uniqBy(state.items.concat(action.payload), "_id");
        }
        state.isLoading = false;
      })
      .addCase(getBelarussianProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBelarussianProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBelarussianProductById.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
      })
      .addCase(getBelarussianProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBelarussianProductById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllBelCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllBelCategories.pending, (state) => {
        state.isLoading = true;
      });
  },
  reducers: {
    setBelCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.items = [];
    },
  },
});

export const selectIsBelProductsLoading = (state) =>
  state.belarussianProducts.isLoading;

export const selectBelCategories = (state) =>
  state.belarussianProducts.categories;

export const { setBelCategory } = BelarussianProductsSlice.actions;

export const BelarussianProductsReducer = BelarussianProductsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_LIST_LIMIT } from "../../constants/products";
import uniqBy from "lodash/uniqBy";

const initialState = {
  items: [],
  isLoading: false,
  categories: [],
  selectedCategory: [],
};

export const getPolishProducts = createAsyncThunk(
  "polishProducts/getPolishProducts",
  async ({
    limit = PRODUCT_LIST_LIMIT,
    offset = 0,
    search = "",
    type = "",
    category = "",
  } = {}) => {
    let requestString = `http://localhost:3000/api/poland/products?limit=${limit}&offset=${offset}&search=${search}`;
    if (type) {
      requestString = requestString.concat(`&type=${type}`);
    } else if (category) {
      requestString = requestString.concat(`&category=${category}`);
    }
    const response = await fetch(requestString);
    return response.json();
  }
);

export const getPolishProductById = createAsyncThunk(
  "polishProducts/getPolishProductById",
  async ({ id }) => {
    const response = await fetch(
      `http://localhost:3000/api/poland/products/${id}`
    );
    return response.json();
  }
);
export const getAllPolCategories = createAsyncThunk(
  "polishProducts/getAllPolCategories",
  async () => {
    const response = await fetch(`http://localhost:3000/api/poland/categories`);
    return response.json();
  }
);
export const searchProducts = createAsyncThunk(
  "polishProducts/searchProducts",
  async ({ search = "" } = {}) => {
    const response = await fetch(
      `http://localhost:3000/api/poland/products?search=${search}`
    );
    return response.json();
  }
);
const polishProductsSlice = createSlice({
  name: "polishProducts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPolishProducts.fulfilled, (state, action) => {
        if (action.meta.arg.type) {
          state.items = action.payload;
        } else {
          state.items = uniqBy(state.items.concat(action.payload), "_id");
        }
        state.isLoading = false;
      })
      .addCase(getPolishProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPolishProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPolishProductById.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
      })
      .addCase(getPolishProductById.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getPolishProductById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllPolCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPolCategories.pending, (state) => {
        state.isLoading = true;
      });
  },
  reducers: {
    setPolCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.items = [];
    },
  },
});

export const selectPolCategories = (state) => state.polishProducts.categories;

export const { setPolCategory } = polishProductsSlice.actions;

export const selectIsPolProductsLoading = (state) =>
  state.polishProducts.isLoading;

export const polishProductsReducer = polishProductsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { polishProductsReducer as polishProducts } from "./polishProducts/polishProductsSlice";
import { BelarussianProductsReducer as belarussianProducts } from "./belarussianProducts/BelarussianProductsSlice";
import { ProductsComparisonReducer as productsComparisons } from "./ProductsComparison/ProductsComparisonSlice";

export default configureStore({
  reducer: {
    polishProducts,
    belarussianProducts,
    productsComparisons,
  },
});

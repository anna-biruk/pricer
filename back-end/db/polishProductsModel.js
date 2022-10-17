import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PolishProducts = new mongoose.Schema({
  title: String,
  price: String,
  weight: String,
  category: String,
  picture: String,
  type: String,
  createdAt: Date,
});

const ProductsModel = mongoose.model(
  "ProductsModel",
  PolishProducts,
  "PolishProducts"
);

export default ProductsModel;

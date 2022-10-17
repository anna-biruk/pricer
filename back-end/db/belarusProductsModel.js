import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BelarusianProducts = new mongoose.Schema({
  title: String,
  price: Number,
  weight: Number,
  manufacturerCountry: String,
  pageUrl: String,
  steepNumber: Number,
  category: String,
  country: String,
  image: String,
  type: String,
  createdAt: Date,
});

const BelarusianProductsModel = mongoose.model(
  "BelarusianProductsModel",
  BelarusianProducts,
  "BelarusSecondProducts"
);

export default BelarusianProductsModel;

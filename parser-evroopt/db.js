import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://root:example@localhost:27017/by_pln_prices?authSource=admin"
  );
}

const Schema = mongoose.Schema;

const Products = new mongoose.Schema({
  title: String,
  price: Number,
  weight: Number,
  image: String,
  manufacturerCountry: String,
  pageUrl: String,
  steepNumber: Number,
  category: String,
  country: String,
  createdAt: Date,
});

const ProductsModel = mongoose.model("ProductsModel", Products, "BelarusSecondProducts");

export default ProductsModel;

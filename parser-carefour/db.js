import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://root:example@localhost:27017/by_pln_prices?authSource=admin"
  );
}

const Schema = mongoose.Schema;

const PolishProducts = new mongoose.Schema({
  title: String,
  price: String,
  weight: String,
  category: String,
  picture: String,
  createdAt: Date,
});

const ProductsModel = mongoose.model("ProductsModel", PolishProducts, "PolishProducts");

export default ProductsModel;

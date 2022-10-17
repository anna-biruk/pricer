import mongoose from "mongoose";

main().catch((err) => console.log(err));

export default async function main() {
  await mongoose.connect(
    "mongodb://root:example@localhost:27017/by_pln_prices?authSource=admin"
  );
}

import express from "express";
import cors from "cors";
import productsController from "./controllers/productsController.js";
import main from "./db/db.js";
const app = express();

app.use(cors());
app.get("/api/poland/products", productsController.getAllPolishProducts);
app.get("/api/poland/products/:id", productsController.getPolishProductById);
app.get("/api/poland/categories", productsController.getAllPolCategories);
app.get("/api/belarus/products", productsController.getAllBelarussianProducts);
app.get(
  "/api/belarus/products/:id",
  productsController.getBearussianProductById
);
app.get("/api/belarus/categories", productsController.getAllBelCategories);
app.get("/api/products-comparison", productsController.getProductsComparison);

app.listen(process.env.PORT || 3000, () => {
  main();
  console.log(`Running on port ${process.env.PORT || 3000}`);
});

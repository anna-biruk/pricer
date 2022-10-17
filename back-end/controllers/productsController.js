import productsService from "../services/productsService.js";

class ProductsController {
  async getAllPolishProducts(req, res) {
    const {
      limit = 20,
      offset = 0,
      search = "",
      type = null,
      category,
    } = req.query;
    const newItem = await productsService.getAllPolishProducts(
      Number.parseInt(limit),
      Number.parseInt(offset),
      search,
      type,
      category
    );
    res.json(newItem);
  }

  async getPolishProductById(req, res) {
    const { id } = req.params;
    const product = await productsService.getPolishProductById(id);
    res.json(product);
  }

  async getAllPolCategories(req, res) {
    const productsCategories = await productsService.getAllPolCategories();
    res.json(productsCategories);
  }

  async getAllBelarussianProducts(req, res) {
    const { limit = 20, offset = 0, search = "", type, category } = req.query;
    const products = await productsService.getAllBelarussianProducts(
      Number.parseInt(limit),
      Number.parseInt(offset),
      search,
      type,
      category
    );
    res.json(products);
  }
  async getBearussianProductById(req, res) {
    const { id } = req.params;
    const product = await productsService.getBearussianProductById(id);
    res.json(product);
  }
  async getAllBelCategories(req, res) {
    const productsCategories = await productsService.getAllBelCategories();
    res.json(productsCategories);
  }
  async getProductsComparison(req, res) {
    const productsComparison = await productsService.getProductsComparison();
    res.json(productsComparison);
  }
}

export default new ProductsController();

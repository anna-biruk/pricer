import ProductsModel from "../db/polishProductsModel.js";
import BelarusianProductsModel from "../db/belarusProductsModel.js";

class ProductsRepository {
  async getAllPolishProducts(limit, offset, search, type, category) {
    const filter = {
      title: { $regex: search, $options: "i" },
    };
    if (type) {
      filter.type = type;
    } else if (category) {
      filter.category = category;
    }

    const products = await ProductsModel.find(filter)
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return products;
  }
  async getPolishProductById(id) {
    const product = await ProductsModel.findOne({ _id: id }).lean();
    return product;
  }

  async getAllPolCategories() {
    const productsCategories = await ProductsModel.distinct("category");
    return productsCategories;
  }

  async getAllBelarussianProducts(limit, offset, search, type, category) {
    const filter = {
      title: { $regex: search, $options: "i" },
    };
    if (type) {
      filter.type = type;
    } else if (category) {
      filter.category = category;
    }
    const products = await BelarusianProductsModel.find(filter)

      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return products;
  }
  async getBearussianProductById(id) {
    const product = await BelarusianProductsModel.findOne({ _id: id }).lean();
    return product;
  }
  async getAllBelCategories() {
    const productsCategories = await BelarusianProductsModel.distinct(
      "category"
    );
    return productsCategories;
  }
}

export default new ProductsRepository();

import productsRepository from "../repositories/productsRepository.js";
import { Convert } from "easy-currencies";
class ProductsService {
  async getAllPolishProducts(limit, offset, search, type, category) {
    const productItem = await productsRepository.getAllPolishProducts(
      limit,
      offset,
      search,
      type,
      category
    );
    return productItem;
  }
  async getPolishProductById(id) {
    const product = await productsRepository.getPolishProductById(id);
    const usdPrice = await Convert(Number.parseFloat(product.price))
      .from("PLN")
      .to("USD");
    return { ...product, usdPrice };
  }
  async getAllPolCategories() {
    const productsCategories = await productsRepository.getAllPolCategories();
    return productsCategories;
  }
  async getAllBelarussianProducts(limit, offset, search, type, category) {
    const products = await productsRepository.getAllBelarussianProducts(
      limit,
      offset,
      search,
      type,
      category
    );
    return products.map((product) => {
      return {
        ...product,
        price: `${product.price} BYN`,
      };
    });
  }
  async getBearussianProductById(id) {
    const product = await productsRepository.getBearussianProductById(id);
    const usdPrice = await Convert(product.price).from("BYN").to("USD");

    return {
      ...product,
      price: `${product.price} BYN`,
      usdPrice: usdPrice,
    };
  }
  async getAllBelCategories() {
    const productsCategories = await productsRepository.getAllBelCategories();
    return productsCategories;
  }

  async getProductsComparison() {
    const coupleOfProductsId = [
      {
        polProductId: "615ed01489b93c533ca7eabc",
        belProductId: "616ffed30e2180dc6f35ddf9",
      },
      {
        polProductId: "615ed01489b93c533ca7e8f2",
        belProductId: "616ffecf0e2180dc6f35dd06",
      },
      {
        polProductId: "615ed01489b93c533ca7eb0c",
        belProductId: "616ffecf0e2180dc6f35dc7b",
      },
      {
        polProductId: "615ed01489b93c533ca7eabb",
        belProductId: "616ffedf0e2180dc6f35e1fd",
      },
      {
        polProductId: "615ed01489b93c533ca7e903",
        belProductId: "616ffed00e2180dc6f35dd7f",
      },
      {
        polProductId: "615ed01489b93c533ca7ec09",
        belProductId: "616ffee10e2180dc6f35e2e0",
      },
      {
        polProductId: "615ed01489b93c533ca7e9bd",
        belProductId: "616fff650e2180dc6f35fbfc",
      },
      {
        polProductId: "615ed01489b93c533ca7e907",
        belProductId: "616ffed00e2180dc6f35dd8e",
      },
      {
        polProductId: "615ed01489b93c533ca7ec57",
        belProductId: "616ffee40e2180dc6f35e416",
      },
      
    ];

    const productsComparisonPromises = coupleOfProductsId.map(async (item) => {
      const belProduct = await this.getBearussianProductById(item.belProductId);
      const polProduct = await this.getPolishProductById(item.polProductId);
      return { belProduct, polProduct };
    });
    const productsComparisons = await Promise.all(productsComparisonPromises);
    return productsComparisons;
  }
}
export default new ProductsService();

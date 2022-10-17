import owv from "./data/owv.js";
import owv2 from "./data/owv2.js";
import owv3 from "./data/owv3.js";
import owv4 from "./data/owv4.js";
import owv5 from "./data/owv5.js";
import owv6 from "./data/owv6.js";
import owv7 from "./data/owv7.js";
import owv8 from "./data/owv8.js";
import ml from "./data/ml.js";
import ml2 from "./data/ml2.js";
import ml3 from "./data/ml3.js";
import ml4 from "./data/ml4.js";
import ml5 from "./data/ml5.js";
import ml6 from "./data/ml6.js";
import ml7 from "./data/ml7.js";
import ml8 from "./data/ml8.js";
import ProductsModel from "./db.js";

const files = [
  owv,
  owv2,
  owv3,
  owv4,
  owv5,
  owv6,
  owv7,
  owv8,
  ml,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  ml7,
  ml8,
];

files.forEach(async (file) => {
  const mappedProducts = file.map((productItem) => {
    const title = productItem.product.name;
    const price = productItem.actualSku.amount.actualOldPriceString;
    const category = productItem.defaultCategoryName;
    const picture = productItem.defaultImage.name;
    const weight = productItem.product.sizeWithUnitString;

    return {
      title,
      price,
      category,
      picture: `https://www.carrefour.pl/images/product/140x140/${picture}`,
      weight,
    };
  });
  console.log(mappedProducts);
  const result = await ProductsModel.insertMany(mappedProducts, {
    ordered: false,
  }).catch((error) => {
    console.error(error.message);

    return error.insertedDocs;
  });
  console.log(`Inserted ${result?.length} products`);
});

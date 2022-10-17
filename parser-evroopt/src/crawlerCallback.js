import ProductsModel from "../db.js";

const mapToDbModel = (
  titles,
  prices,
  images,
  countries,
  pageUrl,
  steepNumber,
  category
) => {
  return titles.map((title, index) => {
    const groups = title.match(/\d+/g);
    const weight = groups[groups.length - 1];

    return {
      title: title,
      price: prices[index],
      image: images[index],
      manufacturerCountry: countries[index],
      pageUrl: pageUrl,
      steepNumber: steepNumber,
      category: category,
      weight: weight,
      country: "BY",
      createdAt: new Date().toISOString(),
    };
  });
};
const mapPrices = (pricesHTMLModels) => {
  const pricesArray = Array.from(pricesHTMLModels).map((price) => {
    const rub = price.firstChild.data.trim();
    const cents = price.children[2].children[0].data;
    return `${rub}.${cents}`;
  });
  return pricesArray;
};

const mapTitles = (titlesHTMLModel) => {
  const titlesArray = Array.from(titlesHTMLModel).map((title) => {
    const name = title.children[0].children[0].data;
    return name;
  });
  return titlesArray;
};
const mapImages = (imagesHTMLModel) => {
  const imagesArray = Array.from(imagesHTMLModel).map((image) => {
    const picture = image.attribs.src;
    return picture;
  });
  return imagesArray;
};

const mapCountries = (countriesHTMLModel) => {
  const countriesArray = Array.from(countriesHTMLModel).map((country) => {
    const manufacturerCountry = country.children[0].data;
    return manufacturerCountry.trim();
  });
  return countriesArray;
};

const crawlerCallback = async (error, res, done) => {
  try {
    if (error) {
      console.log(error);
    } else {
      const $ = res.$;
      const prices = $(".price");
      const pricesArray = mapPrices(prices);

      const titles = $(".title");
      const titlesArray = mapTitles(titles);

      const countries = $(".small_country");
      const countriesArray = mapCountries(countries);

      const images = $(".retina_redy");
      const imagesArray = mapImages(images);

      const products = mapToDbModel(
        titlesArray,
        pricesArray,
        imagesArray,
        countriesArray,
        res.options.pageUrl,
        res.options.steepNumber,
        res.options.category
      );

      const result = await ProductsModel.insertMany(products, {
        ordered: false,
      }).catch((error) => {
        console.error(error.message);

        return error.insertedDocs;
      });
      console.log(`Inserted ${result?.length} products`);
    }

    done();
  } catch (error) {
    done();
    console.error(error.message);
  }
};

export default crawlerCallback;

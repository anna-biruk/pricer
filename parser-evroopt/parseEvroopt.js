import Crawler from "crawler";
import { eachLimit } from "async";
import getDataFromUrl from "./src/getDataFromUrl.js";
import crawlerCallback from "./src/crawlerCallback.js";
import linksData from "./ptoductsLinks.js";

const c = new Crawler({
  maxConnections: 1,
  jQuery: true,
  callback: crawlerCallback,
});

const getProductsByUrl = async (
  linkObject,
  pageNumber = 1,
  steepNumber = 1
) => {
  try {
    const htmlData = await getDataFromUrl(
      `${linkObject.link}?page=${pageNumber}&lazy_steep=${steepNumber}`
    );
    console.log(
      `${linkObject.link}?page=${pageNumber}&lazy_steep=${steepNumber}`
    );
    if (
      htmlData
        .replace(/\n/g, "")
        .startsWith('<div class="navigation clearfix">') || steepNumber > 12
    ) {
     // console.log(htmlData);
      console.log(`Steep Number more than 12. Recursion terminated.`);
      return null;
    }
    if (htmlData.replace(/\n/g, "") !== "") {
      if (htmlData.includes("Следующая страница")) {
        await getProductsByUrl(linkObject, pageNumber + 1, 1);
      } else {
        await getProductsByUrl(linkObject, pageNumber, steepNumber + 1);
        c.queue([
          {
            html: htmlData,
            pageUrl: linkObject.link,
            steepNumber,
            category: linkObject.category,
          },
        ]);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

eachLimit(
  linksData,
  10,
  getProductsByUrl
);

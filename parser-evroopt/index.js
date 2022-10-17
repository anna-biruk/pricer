import Crawler from "crawler";

const c = new Crawler({
  maxConnections: 1,
  jQuery: true,
  callback: crawlerCallback,
});

c.queue(
  `https://e-dostavka.by/catalog/6088.html?lazy_steep=2&_=${+new Date()}`
);

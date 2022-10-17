import got from "got";

const getDataFromUrl = async (url) => {
  const result = await got(url, {
    followRedirect: true,
    headers: {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language":
        "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6,bg;q=0.5",
      "x-requested-with": "XMLHttpRequest",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      Referer: "https://e-dostavka.by/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    },
  });
  return result.body;
};

export default getDataFromUrl;

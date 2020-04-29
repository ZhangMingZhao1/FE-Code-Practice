const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://api.pixivic.com/ranks?page=1&date=2020-04-26&mode=day&pageSize=30";

const getData = () => {
  console.log("1111");
  return new Promise((resolve, reject) => {
    const retData = [];
    axios
      .get(url, {
        origin: "https://pixivic.com",
        Referer: "https://pixivic.com",
      })
      .then((data) => {
        // console.log("data", data);
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = getData;

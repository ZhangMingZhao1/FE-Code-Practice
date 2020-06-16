const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://i.pximg.net/c/540x540_70/img-master/img/2020/06/07/00/00/25/82141048_p0_master1200.jpg";
// "https://api.pixivic.com/ranks?page=1&date=2020-04-26&mode=day&pageSize=30";

const getData = () => {
  // console.log("1111");
  return new Promise((resolve, reject) => {
    const retData = [];
    axios
      .get(url, {
        headers: {
          origin: "https://www.pixiv.net/",
          Referer: "https://www.pixiv.net/",
        },
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

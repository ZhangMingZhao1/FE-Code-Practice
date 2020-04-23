// http://www.ptbird.cn/koa2-body-parser-by-self.html

function listen(ctx) {
  let str = "";
  return new Promise((resolve, reject) => {
    ctx.req.on("data", (data) => {
      str += data;
    });
    ctx.req.on("end", () => {
      // str: key1=v1&key2=v2 这种字符串
      const res = jsonBodyParser(str);
      resolve(res);
    });
  });
}

function jsonBodyParser(str) {
  let bodyData = {};
  let strArr = str.split("&");
  for (let [index, item] of strArr.entries()) {
    const itemArr = item.split("=");
    body[itemArr[0]] = itemArr[1];
  }
  return body;
}

module.exports = () => {
  return async (ctx, next) => {
    const bodyData = await listen(ctx);
    ctx.request.body = bodyData;
    await next();
  };
};

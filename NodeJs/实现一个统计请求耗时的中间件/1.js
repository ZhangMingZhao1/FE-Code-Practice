exports.responseTime = function () {
  return function (req, res, next) {
    req._startTime = new Date();
    let calResponseTime = function () {
      var now = new Date();
      var lastTime = now - req._startTime;
      console.log(lastTime);
    };
    res.once("finish", calResponseTime);
    res.once("close", calResponseTime);
    return next();
  };
};

// 另外一种思路，koa的
const Koa = require("koa");
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response
app.use(async (ctx) => {
  ctx.body = "Hello World";
});

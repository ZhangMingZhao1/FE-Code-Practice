const router = require("koa-router")();
const getData = require("../engine/util");
router.get("/", async (ctx, next) => {
  let data = null;
  try {
    data = await getData();
    // console.log("data1111", data);
  } catch (error) {
    console.log(error);
  }
  ctx.body = data;
});

module.exports = router;

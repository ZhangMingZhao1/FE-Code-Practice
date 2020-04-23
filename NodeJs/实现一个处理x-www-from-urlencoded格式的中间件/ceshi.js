const Router = require("koa-router");
const fs = require("fs");
const path = require("path");
const postBodyParser = require("../middlewares/postBodyParser");
const router = new Router();

router.use(postBodyParser());

router
  .get("/", async (ctx) => {
    const htm = fs.readFileSync(path.resolve("./views/login.html")).toString();
    ctx.body = htm;
  })
  .post("/", async (ctx) => {
    ctx.body = ctx.request.body;
  });

module.exports = router;

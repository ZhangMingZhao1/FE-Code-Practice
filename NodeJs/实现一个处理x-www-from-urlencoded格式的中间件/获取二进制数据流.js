const http = require("http");

http
  .createServer((req, res) => {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const chunks = Buffer.concat(body); // 接收到的二进制数据流

      res.end(chunks.toString());
    });
  })
  .listen(3000);

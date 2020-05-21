function light(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name, "亮了");
      resolve();
    }, ms);
  });
}
function step() {
  Promise.resolve()
    .then(() => {
      return light("红灯", 3000);
    })
    .then(() => {
      return light("绿灯", 2000);
    })
    .then(() => {
      return light("蓝灯", 2000);
    })
    .finally(() => {
      step();
    });
}

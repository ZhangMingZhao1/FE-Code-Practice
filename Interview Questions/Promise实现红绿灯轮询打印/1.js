let timeout = (name, ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, ms);
  });

let r = timeout("红灯", 1000);
let g = timeout("绿灯", 1000);
let b = timeout("蓝灯", 1000);

let a = new Promise((res, rej) => {
  rej(1);
});

// catch 返回的也是个promise对象

a.catch((data) => {
  console.log(data + 1);
  return 10;
}).then(
  (data) => {
    console.log(data + 2);
  },
  (data) => {
    console.log(data + 3);
  }
);

// 2 12

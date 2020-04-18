new Promise(resolve => {
  console.log(1);
  resolve(3);
  Promise.resolve().then(() => console.log(4));
}).then(num => {
  console.log(num);
});
console.log(2);

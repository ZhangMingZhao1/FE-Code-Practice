// setInterval(() => {
//   console.log("111");
// }, 1000);

const mySetInerval = (fn, delay) => {
  setTimeout(() => {
    fn();
    mySetInerval(fn, delay);
  }, delay);
};

mySetInerval(() => {
  console.log("111");
}, 1000);

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

var findRepeatNumber = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; ++i) {
    //检测下标为i的元素是否放在了位置i上
    while ((num = nums[i]) !== i) {
      if (num === nums[num]) {
        return num;
      }
      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }
};

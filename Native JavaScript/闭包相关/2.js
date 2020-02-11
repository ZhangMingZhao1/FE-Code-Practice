function createIncrement(i) {
  let value = 0;

  function increment() {
    value += i;
    console.log(value);
  }
  return increment;
}

let inc = createIncrement(1);

inc(); //1
// 匿名函数销毁，才会销毁value
// inc = null;
inc(); //2 
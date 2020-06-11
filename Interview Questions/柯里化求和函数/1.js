const A = (num1, sum = 0) => {
  return function (num2) {
    if (num2 !== undefined) return A(num2, sum + num1);
    return sum + num1;
  };
};

A(1)(2)(); //3
A(1)(); //1

function add(num) {
  var sum = num;
  var tmp = function (v) {
    sum += v;
    return tmp;
  };

  tmp.toString = function () {
    return sum;
  };

  return tmp;
}

console.log(add(10)(20)(50).toString()); //80

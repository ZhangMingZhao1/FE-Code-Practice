const A = (num1, sum = 0) => {
  return function (num2) {
    if (num2 !== undefined) return A(num2, sum + num1);
    return sum + num1;
  };
};

A(1)(2)(); //3
A(1)(); //1

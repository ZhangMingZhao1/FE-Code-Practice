const prime = function () {
  let index = 2;
  return function () {
    let flag = 0;
    while (true) {
      for (let i = 2; i <= Math.sqrt(index); i++) {
        if (index % i === 0) {
          flag = 1;
        }
      }
      if (flag === 0) {
        return index++;
      } else {
        index++;
        flag = 0;
      }
    }
  };
};

const prime1 = prime();
console.log(prime1());
console.log(prime1());
console.log(prime1());
console.log(prime1());
console.log(prime1());
console.log(prime1());
console.log(prime1());
console.log(prime1());

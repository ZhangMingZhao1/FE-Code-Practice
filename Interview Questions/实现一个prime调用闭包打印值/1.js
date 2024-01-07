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

const primeIns = prime();




console.log(primeIns()); 2
console.log(primeIns()); 3
console.log(primeIns()); 5 
console.log(primeIns()); 7

const primeIns2 = prime();


console.log(primeIns2());
console.log(primeIns2());
console.log(primeIns2());

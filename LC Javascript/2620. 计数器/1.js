/**
 * @param {number} n
 * @return {Function} counter
 */
 var createCounter = function(n) {
  let innerV = n-1
    return function () {
    ++innerV
    console.log(innerV)
    return innerV
  };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

const counter2 = createCounter(3)
counter2() // 3
counter2() // 4
counter2() // 5
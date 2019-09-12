const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
    console.log('accumulator:',accumulator);
    console.log('currentValue:',currentValue);
    console.log('return: ',accumulator + currentValue)
    return accumulator + currentValue;
}

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

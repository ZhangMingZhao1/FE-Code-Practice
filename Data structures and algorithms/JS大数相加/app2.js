let a = '1037';
let b = '9163';

function add(t1, t2) {
  if (t1.length < t2.length) {
    let tmp = t1;
    t1 = t2;
    t2 = tmp;
  }
  let arr1 = t1.split('').reverse();
  let arr2 = t2.split('').reverse();
  arr1 = arr1.map((item) => {
    return Number(item);
  });
  arr2 = arr2.map((item) => {
    return Number(item);
  });
  // console.log(arr1, arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2[i]) {
      arr2[i] = 0;
    }
    let sum = arr1[i] + arr2[i];
    // console.log('---',i, arr1[i]);
    if (sum >= 10) {
      arr1[i] = sum % 10;
      let index = i + 1;
      // if (!arr1[index]) {
      //   arr1[index] = 0;
      // }
      if (index === arr1.length) {
        arr1.push(0);
      }
      arr1[index]++;

      console.log('xxx', i, arr1[i]);
    } else {
      arr1[i] = sum;
      console.log('---', i, arr1[i]);
    }
  }
  // console.log(arr1)
  return Number(arr1.reverse().join(''));
}

console.log(add(a, b));

/**
 * 第一种最常规
 * @param {number} n
 * @return 斐波拉切 
 */
// function fibonacci(n) {
//   if (n === 1 || n === 2) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n + 2);
//   }
// }

// 第二种数组缓存
let f = [0, 1, 1];

function fibonacci2(n) {
  if (!f[n] && n !== 2 && n !== 1) {
    // console.log(n);
    f[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
  }
  return f[n];
}
fibonacci2(4);
console.log(f[4]);

第三种js闭包

闭包 + 缓存数组
const fibonacci3 = (function () {
  const f = [0];
  return function (n) {
    if (f[n] !== undefined) return f[n];
    return f[n] = (n === 1 || n === 2 ? 1 : fibonacci3(n - 1) + fibonacci3(n - 2))
  }
})()

//还有就是公式了https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97#2_2
// 最后是矩阵运算，加上矩阵快速幂
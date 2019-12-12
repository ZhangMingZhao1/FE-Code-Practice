// 导出
// deafult 导出，可以导出任何普通常量或者对象，只允许有一个 default 导出
// file1.js

/**
 * 第一组测试
 */
// export default {
//   a: 1,
//   b: 2
// }
// // 普通导出，可以有任意多个
// export const c = 3
// const d = 4
// const e = 5
// export {
//   d,
//   e
// }

/**
 * 第二组测试
 */

// export default 42
const tmp = 44
const foo = 'foo'
export {
  tmp as
  default, foo
}
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
// Array.prototype.snail = function(rowsCount, colsCount) {
//   if (this.length !== rowsCount * colsCount) return []
//   let mp = new Array(colsCount);
//   for (let i = 0; i < colsCount; i++) {
//     mp[i] = new Array(rowsCount).fill(0);
//   }
//   // console.log('mp', mp)
//   let col = 0;
//   let height = -1
//   while (this.length!==0) {
//     if (height < 0) {
//       height++
//       while (height < rowsCount) {
//         mp[col][height] = this.shift()
//         height++
//       }
//       col++;
//     }
//     if (height === rowsCount && this.length !== 0) {
//       height--
//       while (height >= 0) {
//         mp[col][height] = this.shift()
//         height--
//       }
//       col++;
//     }
//   }
//   let ret = new Array(rowsCount);
//   // 翻转矩阵
//   for (let i = 0; i < rowsCount; i++) {
//     let tmp = [];
//     for (let j = 0; j < colsCount; j++) {
//       tmp.push(mp[j][i])
//     }
//     ret[i] = tmp
//   }
//   // console.log('ret',ret);
//   return ret
// }

// const a = [1,2,3,4];
// console.log(a.snail(1,4))



/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  // 本质思路是遍历行数，控制每行的遍历
  if (this.length !== rowsCount * colsCount) return [];
  let ret = []
  let start = 0; // 行数坐标
  // 行数初始化
  for (let i = 0; i < rowsCount; i++) {
    ret.push([])
  }
  let direction = true; // 正向还是负向
  for(let i = 0; i < this.length; i++) {
    ret[start].push(this[i])
    if(direction) {
      if(start === rowsCount - 1) {
        direction = false
      }else {
        start ++
      }
    }else {
      if(start === 0) {
        direction = true
      }else {
        start --
      }
    }
  }
  return ret;
}


const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.snail(3,3)); // [[1,2,3,4]]



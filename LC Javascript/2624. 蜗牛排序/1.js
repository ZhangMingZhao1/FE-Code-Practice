/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) return []
  let mp = new Array(colsCount);
  for (let i = 0; i < colsCount; i++) {
    mp[i] = new Array(rowsCount).fill(0);
  }
  // console.log('mp', mp)
  let col = 0;
  let height = -1
  while (this.length!==0) {
    if (height < 0) {
      height++
      while (height < rowsCount) {
        mp[col][height] = this.shift()
        height++
      }
      col++;
    }
    if (height === rowsCount && this.length !== 0) {
      height--
      while (height >= 0) {
        mp[col][height] = this.shift()
        height--
      }
      col++;
    }
  }
  let ret = new Array(rowsCount);
  // 翻转矩阵
  for (let i = 0; i < rowsCount; i++) {
    let tmp = [];
    for (let j = 0; j < colsCount; j++) {
      tmp.push(mp[j][i])
    }
    ret[i] = tmp
  }
  // console.log('ret',ret);
  return ret
}

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(a.snail(6,3))
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
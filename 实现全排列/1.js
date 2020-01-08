// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1
// "123"
function Permutation(str) {
  let ans = [];
  let arr = str.split("");
  if (str.length === 0) return [];
  dfs(ans, arr, 0);
  return ans;
}
function dfs(ans, arr, begin) {
  if (begin === arr.length - 1) {
    let tmp = arr.join("");
    ans.push(tmp);
  }
  for (let i = begin; i < arr.length; i++) {
    if (i !== begin && arr[begin] === arr[i]) continue;
    swap(arr, begin, i);
    dfs(ans, arr, begin + 1);
    swap(arr, begin, i);
  }
}

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
console.log(Permutation("abc"));

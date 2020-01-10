let a = [3, 2, 1, 5, 8, 9, 10, 17, 16, 15];
// function quickSort(left, right) {
//   let i, j, t, tmp;
//   if (left > right) return;
//   // 基准数
//   tmp = a[left];
//   i = left;
//   j = right;
//   while (i !== j) {
//     while (a[j] >= tmp && i < j) j--;
//     while (a[i] <= tmp && i < j) i++;
//     if (i < j) {
//       t = a[i];
//       a[i] = a[j];
//       a[j] = t;
//     }
//   }
//   // 基准数还原
//   a[left] = a[i];
//   a[i] = tmp;

//   quickSort(left, i - 1);
//   quickSort(i + 1, right);
//   return;
// }
function quickSort(left, right) {
  if (left > right) return;
  let i, j, t, tmp;
  tmp = a[left];
  i = left;
  j = right;
  if (i !== j) {
    while (a[j] >= tmp && i < j) j--;
    while (a[i] <= tmp && i < j) i++;
    if (i < j) {
      // [a[i], a[j]] = [a[j], a[i]];
      a[i] ^= a[j];
      a[j] ^= a[i];
      a[i] ^= a[j];
    }
  }
  a[left] = a[i];
  a[i] = tmp;
  quickSort(left, i - 1);
  quickSort(i + 1, right);
  return;
}

quickSort(0, 9);
console.log(a);

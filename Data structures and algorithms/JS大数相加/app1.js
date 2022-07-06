let str1 = 9033;
let str2 = 1937;

function add(s1, s2) {
  let res;
  s1 = s1
    .toString()
    .split('')
    .reverse()
    .map((i) => parseInt(i));
  // console.log(s1);
  s2 = s2
    .toString()
    .split('')
    .reverse()
    .map((i) => parseInt(i));
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 < len2) {
    let t = s1;
    s1 = s2;
    s2 = t;
  }
  let t = 0;
  for (let i in s1) {
    if (s2[i]) {
      if (s1[i] + s2[i] >= 10) {
        s1[i] = s1[i] + s2[i] - 10;
        s1[++i]++;
      } else {
        s1[i] += s2[i];
      }
    }
  }
  return s1.reverse().join('');
}

console.log(add(str1, str2));
// console.log(add(1,2));

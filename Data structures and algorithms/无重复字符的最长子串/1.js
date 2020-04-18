// 模拟大法
/**
控制下标，如果遇到相同的，下一个指针是重复字符的下一个位置，且用last保存已经移动的位置，因为ret[cnt]只是子串，last也是子串在母串的位置
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let ret = [""];
  let cnt = 0;
  let index = 0;
  let last = 0;
  while (index !== len) {
    const cur = s[index];
    if (ret[cnt].indexOf(cur) === -1) {
      ret[cnt] += cur;
      index++;
    } else {
      index = ret[cnt].indexOf(cur) + 1 + last;
      last = index;
      ret[++cnt] = s[index];
      index++;
    }
  }
  let max = 0;
  ret.map((k) => {
    if (k.length > max) max = k.length;
  });
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let k = 0;
  let min = strs[0].length;
  strs.map((str, i) => {
    if (str.length < min) k = i;
  });
  let pre = strs[k];
  for (let i = 0; i < strs.length; i++) {
    // 注意这里是前缀 一定要从0开始 如果是相同串没有前缀前置就是 -1
    while (strs[i].indexOf(pre) !== 0) {
      pre = pre.substr(0, pre.length - 1);
      if (!pre.length) return "";
    }
  }
  if (!pre.length) return "";
  else return pre;
};
longestCommonPrefix(["ca", "a"]);

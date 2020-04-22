// 桶排序记录字符个数
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  function isEqual(str1, str2) {
    let hash = new Map();
    for (let v of str1) {
      if (hash.has(v)) {
        hash.set(v, ++hash.get(v));
        // let k = hash.get(v);
        // k++;
        // hash.set(v, k);
      } else {
        hash.set(v, 1);
      }
    }
    for (let v of str2) {
      if (hash.has(v)) {
        hash.set(v, --hash.get(v));
      }
    }
    for (let v of hash.values()) {
      if (v !== 0) return false;
    }
    return true;
  }
  const s1_len = s1.length;
  const s2_len = s2.length;
  let i = 0,
    j = s1_len;
  while (i < s2_len && j <= s2_len) {
    let s2_sub = s2.slice(i, j);
    if (isEqual(s1, s2_sub)) return true;
    else {
      i++;
      j++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));

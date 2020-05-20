const fn = (num) => {
  let result = "";
  void (function trans(m) {
    const n = m % 2;
    result += n;
    const i = Math.floor(m / 2);
    if (i !== 0) trans(i);
  })(num);

  return result.split("").reverse().join("");
};

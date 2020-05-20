const reduce = (arr, cb, init) => {
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr);
  }

  return result;
};

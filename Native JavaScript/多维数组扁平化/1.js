function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

const arr = [1, [2, [3, 4]]];
flatten(arr);

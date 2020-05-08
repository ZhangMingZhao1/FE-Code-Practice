function isObject(obj) {
  return typeof obj === "object" && obj != null;
}

function cloneDeep4(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  // ============= 新增代码
  let symKeys = Object.getOwnPropertySymbols(source); // 查找
  if (symKeys.length) {
    // 查找成功
    symKeys.forEach((symKey) => {
      if (isObject(source[symKey])) {
        target[symKey] = cloneDeep4(source[symKey], hash);
      } else {
        target[symKey] = source[symKey];
      }
    });
  }
  // =============

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep4(source[key], hash);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function cloneDeep4(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  let target = Array.isArray(source) ? [...source] : { ...source };
  hash.set(source, target);

  Reflect.ownKeys(target).forEach((key) => {
    if (isObject(source[key])) {
      target[key] = cloneDeep4(source[key], hash);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

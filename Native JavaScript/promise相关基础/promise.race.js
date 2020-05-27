function race(entries) {
  var Constructor = this; // this 是调用 race 的 Promise 构造器函数。
  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError("You must pass an array to race."));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

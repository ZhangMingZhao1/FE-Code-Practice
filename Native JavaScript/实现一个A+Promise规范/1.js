// https://www.limuyang.cc/2019/04/23/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AC%A6%E5%90%88Promise-A-%E8%A7%84%E8%8C%83%E7%9A%84Promise/#%E7%AE%80%E6%98%93%E7%89%88Promise%E7%9A%84%E5%AE%9E%E7%8E%B0
function Promise(executor) {
  let self = this;
  self.status = "pending";
  self.value = null;
  self.onResolveCallbacks = [];
  self.onRejectCallbacks = [];

  function resolve(value) {
    if (self.status === "pending") {
      self.status = "fulfilled";
      self.value = value;
      self.onResolveCallbacks.forEach(cb => cb(self.value));
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.value = reason;
      self.onRejectCallbacks.forEach(cb => cb(self.value));
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v; // 2.2.1.1
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : r => {
          throw r;
        }; // 2.2.1.2
  if (self.status === "pending") {
    self.onResolveCallbacks.push(onFulfilled);
    self.onRejectCallbacks.push(onRejected);
  } else if (self.status === "fulfilled") {
    onFulfilled(self.value);
  } else if (self.status === "rejected") {
    onRejected(self.value);
  }
};

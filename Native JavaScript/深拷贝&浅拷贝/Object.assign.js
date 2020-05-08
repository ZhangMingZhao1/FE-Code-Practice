if (typeof Object.assign2 != "function") {
  Object.defineProperty(Object, "assign", {
    value: function (target) {
      "use strict";
      if (target == null) {
        // === undefined || null
        throw new TypeError("Cannot convert undefined or null to object");
      }
      // 包装类型，assign会做的事
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            // 这里使用原型链上的，直接调用避免调用到自有属性上的
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
    enumerable: false,
  });
}

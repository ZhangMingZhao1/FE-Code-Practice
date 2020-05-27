/*

函数体内的this，就是需要绑定this的实例函数，或者说是原函数。最后我们使用apply来进行参数（context）绑定，并返回。
同时，将第一个参数（context）以外的其他参数，作为提供给原函数的预设参数，这也是基本的柯里化基础。

*/
Function.prototype.bind =
  Function.prototype.bind ||
  function (context) {
    var self = this;
    var arg = Array.prototype.slice.call(arguments, 1);
    return function () {
      return self.apply(context, arg);
    };
  };

Function.prototype.bind =
  Function.prototype.bind ||
  function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      var innerArgs = Array.prototype.slice.call(arguments);
      var FinalArgs = args.concat(innerArgs);
      return self.apply(context, FinalArgs);
    };
  };

Function.prototype.bind =
  Function.prototype.bind ||
  function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var Fun = {};
    Fun.prototype = this.prototype; //继承原来函数
    var Comb = function () {
      var innerArgs = Array.prototype.slice.call(arguments);
      var FinalArgs = args.concat(innerArgs);
      return self.apply(
        this instanceof Fun ? this : context || this,
        FinalArgs
      );
    };
    Comb.prototype = new Fun();
    return Comb;
  };

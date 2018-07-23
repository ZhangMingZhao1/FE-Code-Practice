function FakeClass(){var s;this.a=1;};
var obj = new FakeClass();

// 等同于
// obj 应用 FakeClass 中的所有 this 成员变量，同时继承构造器的原型。
function FakeClass(){var s;this.a=1;};
var obj = {};
FakeClass.apply(obj);
obj.__proto__ = FakeClass.prototype;
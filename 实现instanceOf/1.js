// 资料：https://juejin.im/post/5b0b9b9051882515773ae714
function Foo() {
  this.a = 1;
  this.b = 1;
}

let foo = new Foo();

function A() {
  this.d = 1;
}
// let flag = foo instanceof Foo;
// console.log(flag);

function myInstanceOf(ins, father) {
  while (ins.__proto__ !== null) {
    if (ins.__proto__ === father.prototype) return true;
    else {
      ins = ins.__proto__;
    }
  }
  if (ins.__proto__ === null) return false;
}

console.log(myInstanceOf(foo, Foo)); // true
console.log(myInstanceOf(foo, A)); // false
console.log(myInstanceOf(Function, Object)); // true
console.log(myInstanceOf(Foo, Foo)); // false
console.log(myInstanceOf(Foo, Object)); // true
console.log(myInstanceOf(Foo, Function)); // true

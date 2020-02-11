// 1.判断左边是否是右边的实例
var oStringObject = new String("hello world"); 
console.log(oStringObject instanceof String);   // 输出 "true"

// 判断 foo 是否是 Foo 类的实例
function Foo(){} 
var foo = new Foo(); 
console.log(foo instanceof Foo)//true


//2.继承关系
// 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例
function Aoo(){} 
function Foo(){} 
Foo.prototype = new Aoo();//JavaScript 原型继承
 
var foo = new Foo(); 
console.log(foo instanceof Foo)//true 
console.log(foo instanceof Aoo)//true

function Aoo(){} 
function Foo(){} 
Foo.prototype = new Aoo();//JavaScript 原型继承
// Aoo {}
var foo = new Foo(); 
// undefined 
foo.__proto__ === Foo.prototype
// true
foo.__proto__ === Aoo.prototype
// false
foo.__proto__.__proto__ ===Aoo.prototype
// true

//由此看来instanceof的原理就是右边的prototype原型对象是否在左边的隐式原型上
var foo = { a: 3 };

function change(obj) {
  obj = { a: 4 };
}

function change2(obj) {
  obj.a = 5;
}

function change3(obj) {
  arguments[0].a = 6;
  console.log(obj);
}
change(foo);
console.log("change", foo);
change2(foo);
console.log("change2", foo);
change3(foo);
change3(foo);
/**
 https://segmentfault.com/q/1010000004171387
每个函数function都的原型都是function.prototype函数原型。
而函数原型有一个属性为arguments，是个数组。
每次function(a,b,c,...)将abc参数赋值给function执行时。
就相当于把a,b,c,...这些参数赋值给arguments数组。

不论是在函数中用var声明的变量，还是函数的参数，都是绑定到执行上下文中的变量环境中的环境记录项的。
换句话说，JS引擎对它们的处理方式是没有区别的，都是作为局部变量。要说区别的话，只是它们的初始化方式不一样。
 */

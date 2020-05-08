/*
1、会忽略 undefined

2、会忽略 symbol

3、不能序列化函数（会直接忽略）

4、不能解决循环引用的对象 报错

5、不能正确处理new Date()

6、不能处理正则

*/
let obj = {
  name: "muyiy",
  a: undefined,
  b: Symbol("muyiy"),
  c: function () {},
};
console.log(obj);
// {
// 	name: "muyiy",
// 	a: undefined,
//  b: Symbol(muyiy),
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "muyiy"}

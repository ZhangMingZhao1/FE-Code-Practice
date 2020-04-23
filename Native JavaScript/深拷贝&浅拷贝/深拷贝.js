// 1.递归实现一个深拷贝
// function deepClone(source){
//   if(!source || typeof source !== 'object'){
//     throw new Error('error arguments', 'shallowClone');
//   }
//   var targetObj = source.constructor === Array ? [] : {};
//   for(var keys in source){
//      if(source.hasOwnProperty(keys)){
//         if(source[keys] && typeof source[keys] === 'object'){
//           targetObj[keys] = source[keys].constructor === Array ? [] : {};
//           targetObj[keys] = deepClone(source[keys]);
//         }else{
//           targetObj[keys] = source[keys];
//         }
//      }
//   }
//   return targetObj;
// }

// md 被面试官问道怎么深拷贝一个函数。。。奇葩问题，后来想想函数的闭包是不可能复制的，函数的作用域特性复制函数没什么鸟用。。。
// 见v站吐槽 有bind，和toString+eval倒是沾点边。
// 拷贝函数？

function test1() {}
test1.a = 1;
let test2 = test1.bind(null);
test2.a; // undefined

function uu() {
  alert("???");
}
var echo = uu.toString();

console.log(echo);
eval(echo);

function deepClone(data) {
  if (data.constructor === Function) {
    throw new Error("canot clone a function");
  }
  if (!data || typeof data !== "object") {
    // 其实这里就是
    // 这里的data null情况严格来说只有null全对象，因为下面的循环做了检测，一般我们是要能拷贝null的，所以这里没排除null。
    return data;
  }

  let res = data.constructor === Array ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] && typeof data[key] === "object") {
        res[key] = data[key].constructor === Array ? [] : {};
        res[key] = deepClone(data[key]);
      } else {
        res[key] = data[key];
      }
    }
  }
  return res;
}

// test example
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: "value"
  },
  func: function() {
    return 1;
  }
};
var o3 = deepClone(o1);
console.log(o3 === o1); // => false
console.log(o3.obj === o1.obj); // => false
console.log(o3.func === o1.func); // => true

//2.jq 的extend(true),lodash,
//3.stringify parse

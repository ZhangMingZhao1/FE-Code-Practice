/*
 require / exports 和 import /export 本质上的差别
1.CommonJS 还是 ES6 Module 输出都可以看成是一个具备多个属性或者方法的对象；
2.default 是 ES6 Module 所独有的关键字，export default fs 输出默认的接口对象，import fs from 'fs' 可直接导入这个对象；
3.ES6 Module 中导入模块的属性或者方法是强绑定的，包括基础类型；而 CommonJS 则是普通的值传递或者引用传递。
 
222 require是运行时执行的，import是编译时执行的，所以require可以用在任何地方，import必须声明在文件头
333 import a from './a' import的时候，后面的url是定死的，你不能改变；
 但是如果你在用require的时候，你这里是可以用变量来进行require，
 例如 let url = dev; if (ENV === 'test') url = 'test'; const a = require(url);

es module后来出了动态加载，可以用新的规范 import()弥补

更具体可看：http://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82
总结ruan老师说的
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. require原始类型的值会被缓存，后面在调用模块的函数改变这个值，不会变，除非写成一个取值器函数。
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};

相反，ES6 模块输入的变量counter是活的，ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。

3. import obj。obj的地址是只读的，相当于声明了const，但对象内部属性可以赋值。

4. ex module export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
 模块中 export new Obj(),不同的模块加载它，都是同一个实例。
 */

// counter.js
exports.count = 0
setTimeout(function () {
  console.log('increase count to', ++exports.count, 'in counter.js after 500ms')
}, 500)

// commonjs.js
const {
  count
} = require('./counter')
setTimeout(function () {
  console.log('read count after 1000ms in commonjs is', count)
}, 1000)

//es6.js
import {
  count
} from './counter'
setTimeout(function () {
  console.log('read count after 1000ms in es6 is', count)
}, 1000)

/*

➜  test node commonjs.js
increase count to 1 in counter.js after 500ms
read count after 1000ms in commonjs is 0
require方式的引用会触发执行counter.js打印1,但导出的count和exports一一对应，还是0

➜  test babel-node es6.js
increase count to 1 in counter.js after 500ms
read count after 1000ms in es6 is 1
这里根据babel的转译来确定输出

*/
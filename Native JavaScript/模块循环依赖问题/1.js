// http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html

// a.js
exports.done = false;
var b = require("./b.js");
console.log("在 a.js 之中，b.done = %j", b.done);
exports.done = true;
console.log("a.js 执行完毕");

// b.js
exports.done = false;
var a = require("./a.js");
console.log("在 b.js 之中，a.done = %j", a.done);
exports.done = true;
console.log("b.js 执行完毕");

/**
 * main.js,
 */
var a = require("./a.js");
var b = require("./b.js");
console.log("在 main.js 之中, a.done=%j, b.done=%j", a.done, b.done);

/*
在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
在 main.js 之中, a.done=true, b.done=true
*/

/*
上面的代码证明了两件事。一是，在b.js之中，a.js没有执行完毕，只执行了第一行。二是，main.js执行到第二行时，不会再次执行b.js，而是输出缓存的b.js的执行结果，即它的第四行。

*/

/*
ES6模块的运行机制与CommonJS不一样，它遇到模块加载命令import时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。 
因此，ES6模块是动态引用，不存在缓存值的问题，而且模块里面的变量，绑定其所在的模块。请看下面的例子。

*/
// m1.js
export var foo = "bar";
setTimeout(() => (foo = "baz"), 500);

// m2.js
import { foo } from "./m1.js";
console.log(foo);
setTimeout(() => console.log(foo), 500);
/*
$ babel-node m2.js

bar
baz

*/

/*
上面代码表明，ES6模块不会缓存运行结果，而是动态地去被加载的模块取值，以及变量总是绑定其所在的模块。
 
这导致ES6处理"循环加载"与CommonJS有本质的不同。ES6根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
*/

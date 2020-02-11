/*定义这样一个函数
function repeat(func, times, wait) {
}
参数分别是需要 repeat的函数， repeat的次数，每次repeat的间隔
使用方式如下
调用这个函数能返回一个新函数
,比如传入的是alert
var repeatedFun = repeat(alert, 10, 5000);
调用返回的这个新函数，如: repeatFun("hellworld");
会alert十次 helloworld
*/

function repeat(func, times, wait){
  return function() {
    var arg = arguments;
    var timer = setInterval(function() {
        func.apply(null, Array.prototype.slice.call(arg,0))
        --times || clearInterval(timer);  
      }, wait);
  }
}
function print(d) {
  console.log(d);
}
var repeatedFuc = repeat(print,5,2000);
repeatedFuc("hello world");
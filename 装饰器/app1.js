// 装饰器函数
function decorators(target) {
    target.color = 'black';
}
// 用@装饰器 装饰一个类 
@decorators
class Car {
   
}
console.log(Car.color);  // 输出black
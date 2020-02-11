function Animal(name) {
  // 属性
  this.name =  name || "Animal";
  // 实例方法 
  this.obj = {
    '1':1,
    '2':2,
    '3':3
  }
  this.sleep = function() {
    console.log(this.name + '正在睡觉！');
  }
}

// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food);
};


function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();

//组合继承也是需要修复构造函数指向的。

Cat.prototype.constructor = Cat;

// Test Code
var cat = new Cat();
var cat2 = new Cat();
cat.obj['3'] = 1;
cat2.obj;//不一样了


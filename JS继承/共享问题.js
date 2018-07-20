function Animal(name) {
  // 属性
  this.name =  name || "Animal";
  // 实例方法 
  this.obj = {
    '1':1,
    '2':2,
    '                               ':3
  }
  this.sleep = function() {
    console.log(this.name + '正在睡觉！');
  }
}

// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food);
};


function Cat() { 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
var cat2 = new Cat();
cat.obj['4'] = 4;
cat2.obj;//竟然和上面一样

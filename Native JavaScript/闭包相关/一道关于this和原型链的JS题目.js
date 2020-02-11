function Parent() {
  this.a = 1;
  this.b = [1, 2, this.a];
  this.c = {
    demo: 8
  };
  this.show = function () {
    console.log(this.a, this.b, this.c.demo);
  }
}

function Child() {
  this.a = 2;
  this.change = function () {
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a;
  }
}
Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;

parent.show(); //Q1
child1.show(); //Q2
child2.show(); //Q3

child1.change();
child2.change();

parent.show(); //Q4 同Q1
child1.show(); //Q5 4 (5) [1, 2, 1, 11, 12] 5
child2.show(); //Q6 5 (5) [1, 2, 1, 11, 12] 5

// 需要注意的是this.b,this.c 属性都是child1 child2没有的，所以这里的属性都是父亲Parent原型对象上的同一块内存，所以打印Q5，Q6打印this.b的时候都是这个push了两次的数组，
// 但this.a 都是自己就有的独立属性，所有有单独的内存保存，第一次change的时候this.a保存了4，那就是4，第二次Q5保存了自己a，这时候就是5了
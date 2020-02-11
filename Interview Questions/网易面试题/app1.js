function Foo(){
    bar=function(){console.log(1)};
    return this;
}

Foo.bar=function(){console.log(2)}
Foo.prototype.bar=function(){console.log(3)};
var bar = function(){console.log(4)}
function bar(){
    console.log(5);
}



new bar();
Foo.bar();
Foo().bar();
bar();
new Foo().bar()
//4 2 1 1 3

// ------------------------编译后
var bar
function Foo(){
    bar=function(){console.log(1)};
    return this;
}
bar = function(){console.log(5)}


Foo.bar=function(){console.log(2)}
Foo.prototype.bar=function(){console.log(3)};
bar = function(){console.log(4)}

// new bar();   4
// Foo.bar(); 2 静态方法，只能用构造函数调用，实例调用不了，会在prototype上找
// Foo().bar(); 1构造函数执行一边后，会调用到bar=function(){console.log(1)}; 此时this是window，全局下bar从4被覆盖到了1，所以是1
// bar(); 这里也就是1了
// new Foo().bar() 3 静态方法，只能用构造函数调用，实例调用不了，会在prototype上找了，所以是3

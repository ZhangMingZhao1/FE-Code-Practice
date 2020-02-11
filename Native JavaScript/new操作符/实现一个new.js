function newFn() {
    let obj = {};
    let Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);

    return obj;
}

function Foo(){
    this.type = 'Foo';
    this.age = 18;
}

let foo = newFn(Foo);

console.log(foo.type,foo.age);

/* // 当构造函数有返回值的时候

function newFn() {
    const obj = {};
    const Constructor = [].shift.call( arguments )
    obj.__proto__ = Constructor.prototype;
    const result = Constructor.apply( obj, arguments ) // 接受一下构造函数的返回值,是对象就return该对象,否则还是return实例对象

    return typeof result === 'object' ? result : obj
}


function Human( name, age ) {
    this.type = 'human'
    this.age = 18
    return {
        name: name,
        age: age
    }
}

var human1 = newFn( Human, 'ziwei', '24' )

console.log( human1 ) */

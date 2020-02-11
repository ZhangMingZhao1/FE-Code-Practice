/*
var Singleton = function(name) {
    this.name = name;
    //一个标记，用来判断是否已将创建了该类的实例
    this.instance = null;
}
// 提供了一个静态方法，用户可以直接在类上调用
Singleton.getInstance = function(name) {
    // 没有实例化的时候创建一个该类的实例
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    // 已经实例化了，返回第一次实例化对象的引用
    return this.instance;
}
*/

class Singleton {
    constructor(arg) {
        this.arg = arg;
        this.instance = null;
    }

    // 构造一个广为认知的接口,供用户对该类进行实例化
    static getInstance(arg) {
        if(!this.instance) {
            this.instance = new Singleton(arg);
        }
        return this.instance;
    }
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// 指向的是唯一实例化的对象
console.log(a === b);
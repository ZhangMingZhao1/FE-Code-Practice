class Foo {
   
    constructor() {
        console.log(Foo.data);
        // console.log('静态方法执行');
    }

    static log() {
        console.log('静态方法执行')
    }
}

let foo = new Foo();
// Foo.data = 1;
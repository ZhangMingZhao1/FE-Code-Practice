function identify() {
    return this.name.toUpperCase();
}

function sayHello() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var person1= {
    name: "Kyle"
};

var person2= {
    name: "Reader"
};

identify.call( person1); // KYLE

identify.call( person2); // READER

sayHello.call( person1); // Hello, I'm KYLE

sayHello.call( person2); // Hello, I'm READER
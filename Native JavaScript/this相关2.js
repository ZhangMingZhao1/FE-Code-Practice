function fn(num) {
    console.log( "fn: " + num );
    // count用于记录fn的被调用次数
    this.count++;
}
fn.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        fn( i );
    }
}

// fn: 6
// fn: 7
// fn: 8
// fn: 9

console.log( fn.count ); // 0 -- 耶？咋不是4捏？
// fn(i)调用时this指的是全局变量,一般是window,window.count就是4
// fn.count就一直没有变过,当然是0
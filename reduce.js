//实现加法
var arr = [1,2,3,4];
console.log(arr.reduce(function (x, y) {
    return x + y;
}));

//要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579
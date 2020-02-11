// 给String对象定义一个repeatify方法。该方法接收一个整数参数，作为字符串重复的次数，
// 最后返回重复指定次数的字符串。例如：

// console.log('hello'.repeatify(3));
// hellohellohello.



String.prototype.repeatify = String.prototype.repeatify || function(times) {

    var str = '';

    for (var i = 0; i < times; i++) {

        str += this;

    }

    return str;

};


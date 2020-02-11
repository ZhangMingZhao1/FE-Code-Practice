var addFun = {

    a : 1,

    add : function(t) {
        var f = d => d + this.a;
        return f(t);
    },

    add2: function(t) {
        var f = d => d + this.a;
        var f2 = {
            base : 2
        };

        return f.call(f2, t);
    }
};

console.log(addFun.add(1));         // 输出 2
console.log(addFun.add2(1)); // 仍然输出 2
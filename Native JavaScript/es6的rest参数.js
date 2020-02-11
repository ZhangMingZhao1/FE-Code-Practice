function add(...[a,b,c]){
    return a+b+c;
}

var r = add(6);

console.log(r);//NaN，数学计算返回的非Number类型

var t = add(7,56,9);

console.log(t);
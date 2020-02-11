var a = new Array();
a['one'] = 1;
a['two'] = 2;
a['three'] = 3;
 
alert(a.length);
/**
 * Array 赋值后，其length属性仍然为0,因为数据并没有被放到数组
 * 的位置中，而是被放到了Array的原形对象Object中。
 * 所以Array的最顶层原型对象还是Object，Object就是顶层就是null。
 * 
 */
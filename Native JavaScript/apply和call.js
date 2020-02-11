// var a = [1,2,3,4];
// console.log(a.slice(1));//2,3,4

function cat() {
}

cat.prototype = {
    food:'fish',
    say:function () {
        console.log('I love ' + this.food);
    }
}

var blackCat = new cat();
blackCat.say();

whiteDog = {
    food:'bone'
};

blackCat.say.call(whiteDog);
// I love fish
// I love bone
/*
所以，可以看出call和apply是为了动态改变this而出现的，
当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。
用的比较多的，通过document.getElementsByTagName选择的dom 节点是一种类似array的array。
它不能应用Array下的push,pop等方法。我们可以通过：
var domNodes =  Array.prototype.slice.call(document.getElementsByTagName("*"));
这样domNodes就可以应用Array下的所有方法了。
*/


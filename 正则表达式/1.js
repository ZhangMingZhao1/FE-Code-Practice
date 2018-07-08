/*//1.求非负整数
var str = "-aa1234";
var rep = /-^\d+$/;
console.log(rep.test(str));;*/

/*function test() {
    for(var i=0; i<5; i++) {
        setTimeout(function(i) {
           console.log(i)
        }, 0,i,this);
    }
}
test(); //5,5,5,5,5*/

/*
var i = 0;
function self_shift() {
    if(i!==6) {
        console.log(i);
        i++;
        setTimeout(self_shift, 0);
    }
}
setTimeout(self_shift,0);
*/


/*
const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        this.skill.forEach(function(item,index){
            setTimeout(function(){
                console.log(index)
                console.log(item);
            },0)
        })
    },
    say2:function(){
        for (var i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(function(i,item){
                console.log(i);
                console.log(item);
            },0,i,this.skill[i]);
        }
    },
    say3:function () {
        let i = 0;
        const arr = this.skill.slice();
        function self_shift() {
            //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。空返回undefined
            const item = arr.shift();
            if(item) {
                console.log(i);
                console.log(item);
                i++;
                setTimeout(self_shift, 0);
            }
        }
        setTimeout(self_shift,0);
    }
};
// obj.say();
obj.say2();
// obj.say3();*/

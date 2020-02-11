/*有问题的代码
const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        for (var i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(function(){
                console.log(i);
                console.log(this.skill[i]);
            }, 0)
            console.log(i);
        }
    }
};
obj.say();
*/

//把上面代码改成我们想要的结果

/*const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function ()
    {
        var that = this;
        for (var i = 0, len = this.skill.length; i < len; i++)
        {
            setTimeout((function()
            {
                console.log(i);
                console.log(that.skill[i]);
            })(), 0)
            console.log(i);
        }
    }
};
obj.say();*/

/*const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        var that = this;
        for (var i = 0, len = this.skill.length; i < len; i++) {
            (function () {
                var j = i;
                setTimeout((function () {
                    console.log(j);
                    console.log(that.skill[j]);
                }), 0)
            })()
            console.log(i);
        }
    }
};
obj.say();*/

/*const obj = {
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
obj.say();
obj.say2();
obj.say3();


const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        for (var i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(((i) => {
                return () => {
                    console.log(i);
                    console.log(this.skill[i]);
                }
            })(i), 0)
            console.log(i);
        }
    }
};
obj.say();*/


const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        var that = this;
        for (let i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(function(){
                console.log(i);
                console.log(that.skill[i]);
            }, 0)
            console.log(i);
        }
    }
};
obj.say();
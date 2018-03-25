/*var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        return function () {
            return this.name;
        };

    }

};

alert(object.getNameFunc()());//"The Window"*/

//解答
/*分解一下

var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function() {
        return function() {
            return this.name;
        }
            ;

    }

};

var func = object.getNameFunc()

alert(func());
func的this是window*/

var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };

    }

};

alert(object.getNameFunc()());//"My Object"
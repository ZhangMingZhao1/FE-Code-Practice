/*function createFunction() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
}

console.log(createFunction());*/


/*    var result = []
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }

    console.log(result[6]());*/

/*//  解决办法
    var result = []
    for(var i = 0; i < 10; i++) {
        result[i] = function(i) {
            return i;
        }(i);
    }
    console.log(result)*/

//  解决办法2
    var result = []
    for(var i = 0; i < 10; i++) {
        result[i] = (function() {
            return i;
        })(i);
    }
    console.log(result);





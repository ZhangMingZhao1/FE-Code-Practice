//作用域链
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // logs 6 (1 + 2 + 3)

//   在上面的代码中，外部函数的name变量对内嵌函数来说是可取得的，
//   而除了通过内嵌函数本身，没有其它任何方法可以取得内嵌的变量。
//   内嵌函数的内嵌变量就像内嵌函数的保险柜。它们会为内嵌函数保留“稳定”——而又安全——的数据参与运行。
//   而这些内嵌函数甚至不会被分配给一个变量，或者不必一定要有名字。

//匿名立即执行函数，安全性
  var getCode = (function(){
    var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
    
    return function () {
      return secureCode;
    };
  })();
  
  getCode();    // Returns the secret code
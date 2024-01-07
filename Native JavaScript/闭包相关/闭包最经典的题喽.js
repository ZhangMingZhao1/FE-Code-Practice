// function createFunctions() {
//   var result = new Array();

//   for (var i = 0; i < 10; i++) {
//     result[i] = function () {
//       return i;
//     }
//   }
//   return result;
// }

// var res = createFunctions();
// // 10 10 10 10 10
// console.log(res[0](), res[1](), res[2](), res[3](), res[4]());

// function createFunctions() {
//   var result = new Array();

//   for (var i = 0; i < 10; i++) {
//     result[i] = (function (num) {
//       return function () {
//         return num;
//       }
//     })(i)
//   }
//   return result;
// }

// var res = createFunctions();
// // 解释在：
// console.log(res[0](), res[1](), res[2](), res[3](), res[9]());


// function Foo() {
//   var value = 1;
//   return function returnV() {
//     return value;
//   }
// }
// var foo = Foo();
// foo();

function createFunctions() {
  var result = new Array();

  for (var i = 0; i < 10; i++) {
    result[i] =
      function () {
        return i;
      }
  }
  return result;
}

var res = createFunctions();
console.log(res);
// 解释在：
console.log(res[0](), res[1](), res[2](), res[3](), res[9]());
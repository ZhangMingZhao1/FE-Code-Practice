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

function createFunctions() {
  var result = new Array();

  for (var i = 0; i < 10; i++) {
    result[i] =
      function () {
        return num;
      }
  }
  return result;
}

var res = createFunctions();
// 解释在：
console.log(res[0](), res[1](), res[2](), res[3](), res[9]());
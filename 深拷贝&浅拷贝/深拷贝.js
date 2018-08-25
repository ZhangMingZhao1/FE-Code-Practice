// 1.递归实现一个深拷贝
// function deepClone(source){
//   if(!source || typeof source !== 'object'){
//     throw new Error('error arguments', 'shallowClone');
//   }
//   var targetObj = source.constructor === Array ? [] : {};
//   for(var keys in source){
//      if(source.hasOwnProperty(keys)){
//         if(source[keys] && typeof source[keys] === 'object'){
//           targetObj[keys] = source[keys].constructor === Array ? [] : {};
//           targetObj[keys] = deepClone(source[keys]);
//         }else{
//           targetObj[keys] = source[keys];
//         }
//      } 
//   }
//   return targetObj;
// }



function deepClone(data){
  if(!data || typeof data!=='object') {
    return data;
  }
  let res = data.constructor === Array ? [] : {};
  for(let key in data) {
    if(data.hasOwnProperty(key)) {
      if(data[key] && typeof data[key] === 'object') {
        res[key] = data.constructor === Array? []: {};
        res[key] = deepClone(data[key]);
      }else {
        res[key] = data[key];
      }
    }
  }
  return res;
}


// test example
var o1 = {
 arr: [1, 2, 3],
 obj: {
   key: 'value'
 },
 func: function(){
   return 1;
 }
};
var o3 = deepClone(o1);
console.log(o3 === o1); // => false
console.log(o3.obj === o1.obj); // => false
console.log(o3.func === o1.func); // => true

//2.jq 的extend(true),lodash,
//3.stringify parse
// 递归实现一个深拷贝
function deepClone(source){
  if(!source || typeof source !== 'object'){
    throw new Error('error arguments', 'shallowClone');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for(var keys in source){
     if(source.hasOwnProperty(keys)){
        if(source[keys] && typeof source[keys] === 'object'){
          targetObj[keys] = source[keys].constructor === Array ? [] : {};
          targetObj[keys] = deepClone(source[keys]);
        }else{
          targetObj[keys] = source[keys];
        }
     } 
  }
  return targetObj;
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
console.log(o2.func === o1.func); // => true
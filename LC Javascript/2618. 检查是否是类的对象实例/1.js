
// https://leetcode.cn/problems/check-if-object-instance-of-class/
/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
// 注意处理入参的null和undefined报错
 var checkIfInstanceOf = function(obj, classFunction) {
  try {
      while(obj.__proto__!==null) {
          if(obj.__proto__===classFunction.prototype) return true
          else obj = obj.__proto__
      }
      if(obj.__proto__===null) return false
  }catch(e) {
      return false
  }

};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/
/**
 * @param {Function} fn
 */
function memoize(fn) {
  let memFn = {}
  return function (...args) {
    const key = Array.from(args).join('.')
    if(memFn[key]!==undefined) return memFn[key]
    else {
      const ret = fn(...args)
      memFn[key] = ret
      return ret;
    }
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/
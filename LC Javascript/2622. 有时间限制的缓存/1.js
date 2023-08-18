var TimeLimitedCache = function() {
  this.obj = {}
};

/** 
* @param {number} key
* @param {number} value
* @param {number} time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const has = this.obj[key] ? true : false;
  this.obj[key] = {
      v: value,
      missTime :Date.now() + duration
  }
  return has
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  const foo = this.obj[key]
  if(foo && Date.now() < foo.missTime) {
      return foo.v
  }else {
      return -1
  }

};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  const curTime = Date.now();
  let sum = 0
  Object.values(this.obj).forEach((item)=>{
      if(curTime<item.missTime) sum++
  })
  return sum;
};

/**
* Your TimeLimitedCache object will be instantiated and called as such:
* var obj = new TimeLimitedCache()
* obj.set(1, 42, 1000); // false
* obj.get(1) // 42
* obj.count() // 1
*/
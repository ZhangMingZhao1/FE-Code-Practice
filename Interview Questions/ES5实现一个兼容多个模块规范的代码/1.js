(function(name, definition) {
  var hasDefine = typeof define === 'function'
  var hasExports = module !== undefined && module.exports
  if (hasDefine) {
    // amd环境或者cmd环境
    define(definition)
  } else if(hasExports){
    module.exports = definition()
  } else {
    //兜底
    this[name] = definition()
  }
})('hello', function () { 
  return function () { console.log('hello')}
})
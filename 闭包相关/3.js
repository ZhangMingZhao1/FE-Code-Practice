// this丢失问题
// 注意要在浏览器环境下执行
var name = 'window';

var obj = {
  name: 'obj',
  getName: function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
}
console.log(obj.getName()());
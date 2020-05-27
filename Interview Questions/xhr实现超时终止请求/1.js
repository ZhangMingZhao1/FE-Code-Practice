// XMLHttpRequest 2.0 已支持timeout超时参数
/*
发起HTTP GET请求获取指定URL的内容
如果响应成功到达，则传入responseText给回调函数
如果响应在timeout时间内没有到达，则中止请求
浏览器可能会在abort()后出啊发readystatechange
如果部分请求结果到达，甚至可能设置status属性
所有需要设置一个标记，当部分且超时的响应到达时不会调用回调函数
如果使用load(当请求完成时触发)事件就没有这个风险
*/
function(url, timeout, callback) {
  var request = new XMLHttpRequest();
  var time = false;//是否超时
  var timer = setTimeout(function () {
    timeout = true;
    request.abort();//请求中止
  }, timeout);
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (request.readyState !== 4) continue;//忽略未完成的请求
    if (timeout) return;//忽略中止请求
    clearTimeout(timer);//取消等待的超时
    if (request.status === 200)
      callback(request.responseText);
  }
  request.send(null);
}
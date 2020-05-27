function loadJsAsync(url) {
  var body = document.getElementsByTagName("body")[0];
  var jsNode = document.createElement("script");

  jsNode.setAttribute("type", "text/javascript");
  jsNode.setAttribute("src", url);

  let flag = false;
  setTimeout(() => {
    if (flag) {
      // 业务逻辑代码
    } else {
      console.log("超时");
      return; // 结束函数
      // 超时业务逻辑代码
    }
  }, 1000);
  if (jsNode.onload) {
    jsNode.onload = function () {
      // do something
      flag = true;
    };
  } else {
    // ie6, ie7不支持onload的情况
    jsNode.onreadystatechange = function () {
      if (jsNode.readyState == "loaded" || jsNode.readyState == "complete") {
        // 异步js加载完毕
        // do something执行操作
      }
    };
  }
  body.appendChild(jsNode);
}

function loadJsAsync(url) {
  var body = document.getElementsByTagName("body")[0];
  var jsNode = document.createElement("script");

  jsNode.setAttribute("type", "text/javascript");
  jsNode.setAttribute("src", url);
  body.appendChild(jsNode);

  if (jsNode.onload) {
    jsNode.onload = function () {
      // do something
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
}

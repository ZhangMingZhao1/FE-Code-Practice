function logger(store) {
  let next = store.dispatch;

  // 我们之前的做法(在方法内直接替换dispatch):
  // store.dispatch = function dispatchAndLog(action) {
  //         ...
  // }

  return function dispatchAndLog(action) {
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
}

function applyMiddleware(store, middlewares) {
  middlewares = [...middlewares]; //浅拷贝数组, 避免下面reserve()影响原数组
  middlewares.reverse(); //由于循环替换dispatch时,前面的中间件在最里层,因此需要翻转数组才能保证中间件的调用顺序
  // 循环替换dispatch
  middlewares.forEach((middleware) => (store.dispatch = middleware(store)));
}

applyMiddleware(store, [logger, crashReporter]);

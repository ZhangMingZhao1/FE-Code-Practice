const applyMiddleware = (...middlewares) => (createStore) => (reducer) => {
  const store = createStore(reducer);
  let { getState, dispatch } = store;
  const params = {
    getState,
    dispatch: (action) => dispatch(action)
    //解释一下这里为什么不直接 dispatch: dispatch
    //因为直接使用dispatch会产生闭包,导致所有中间件都共享同一个dispatch,如果有中间件修改了dispatch或者进行异步dispatch就可能出错
  };

  const middlewareArr = middlewares.map((middleware) => middleware(params));

  dispatch = compose(...middlewareArr)(dispatch);
  return { ...store, dispatch };
};

//compose这一步对应了middlewares.reverse(),是函数式编程一种常见的组合方法
function compose(...fns) {
  if (fns.length === 0) return (arg) => arg;
  if (fns.length === 1) return fns[0];
  return fns.reduce((res, cur) => (...args) => res(cur(...args)));
}

// compose内部使用reduce巧妙地组合了中间件函数，使传入的中间件函数变成(...arg) => mid3(mid1(mid2(...arg)))这种形式
// 在上个目录reduce实现中间件也有实践
// 不直接替换dispatch，而是作为高阶函数增强createStore，最后return的是一个新的store

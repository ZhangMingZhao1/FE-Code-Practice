// store.js
export const createStore = (reducer, heightener) => {
  // heightener是一个高阶函数,用于增强createStore
  //如果存在heightener,则执行增强后的createStore
  if (heightener) {
    return heightener(createStore)(reducer);
  }
  let currentState = {};
  let observers = []; //观察者队列
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach((fn) => fn());
  }
  function subscribe(fn) {
    observers.push(fn);
  }
  dispatch({ type: "@@REDUX_INIT" }); //初始化store数据
  return { getState, subscribe, dispatch };
};

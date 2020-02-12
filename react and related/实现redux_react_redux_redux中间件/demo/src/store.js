// store.js
export const createStore = (reducer) => {
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

import {
  reducer
} from './reducer';

// 一个简单的redux就已经完成，在redux真正的源码中还加入了入参校验等细节，但总体思路和上面的基本相同。

export const createStore = (reducer) => {
  let currentState = {}
  let observers = [] //观察者队列   
  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach(fn => fn());
  }

  function subscribe(fn) {
    observers.push(fn);
  }
  dispatch({
    type: '@@REDUX_INIT'
  }) //初始化store数据        
  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore(reducer) //创建store
store.subscribe(() => {
  console.log('组件1收到store的通知')
})
store.subscribe(() => {
  console.log('组件2收到store的通知')
})
store.dispatch({
  type: 'plus'
}) //执行dispatch，触发store的通知
import {
  reducer
} from './reducer'
export const createStore = (reducer) => {
  let currentState = {}

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
  }

  function subscribe() {}
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
store.dispatch({
  type: 'plus'
}) //执行加法操作,给count加1
console.log(store.getState()) //获取state
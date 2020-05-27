/*
一个redux的完整技术例子为例，包括action，reducer，store三部分
*/

// action部分
// action type
// const INCREMENT = "increment";
// const DECREMENT = "decrement";

// // action creator 也叫action 创建函数
// function increment() {
//   return {
//     type: INCREMENT,
//   };
// }

// function decrement() {
//   return {
//     type: DECREMENT,
//   };
// }

// // Reducer 部分

// const initialState = {
//   count: 0,
// };

// function countReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT: {
//       return {
//         count: state.count + 1,
//       };
//     }
//     case DECREMENT: {
//       return {
//         count: state.count - 1,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }

// // Store 部分
// const store = createStore(countReducer);

// // 设置监听
// store.subscribe(() => {
//   console.log(store.getState().count);
// });
// // 设置时间间隔去触发动作
// setInterval(() => {
//   store.dispatch(increment());
// }, 1000);

// /* // 非TS版
// 一个简单的redux应用就由上面三部分组成，重点关注createStore方法，因为算是它结合了Action和Reducer，
// 而且也算是redux的核心，所以我们尝试编写一个简单的createStore函数
// */
// function createStore(reducer, initialState = reducer(void 0, { type: null })) {
//   let state = initialState; // 存储state
//   let currentReducer = reducer; // 存储当前的reducer
//   let listener = []; //存储监听函数

//   return {
//     getState() {
//       return state;
//     },
//     dispatch(action) {
//       state = currentReducer(state, action); // reducer使用在这里
//       listener.forEach((cb) => cb()); // 核心，每次dispatch都要调用监听的函数
//       return action;
//     },
//     subscribe(newListener) {
//       listener.push(newListener);
//     },
//     replaceReducer(newReducer) {
//       currentReducer = reducer;
//     },
//   };
// }

// TS版
export type Action = {
  type: String;
  [key: string]: any;
};
export type ReducerType = (state: any, action: Action) => any;
export type Dispatch<T = Action> = (action: T) => any;
export type Store<T = any, E = Action> = {
  getState: () => T;
  dispatch: Dispatch<E>;
  subscribe: (listener: Function) => void;
  replaceReducer: (newReducer: ReducerType) => void;
};

export function createStore(
  reducer: ReducerType,
  initialState = reducer(void 0, { type: null })
): Store {
  let state = initialState; // 存储state
  let currentReducer = reducer; // 存储当前的reducer
  let listener: Array<Function> = []; //存储监听函数

  return {
    getState() {
      return state;
    },
    dispatch(action: Action) {
      state = currentReducer(state, action); // reducer使用在这里
      listener.forEach((cb) => cb()); // 核心，每次dispatch都要调用监听的函数
      return action;
    },
    subscribe(newListener: Function) {
      listener.push(newListener);
    },
    replaceReducer(newReducer: ReducerType) {
      currentReducer = reducer;
    },
  };
}

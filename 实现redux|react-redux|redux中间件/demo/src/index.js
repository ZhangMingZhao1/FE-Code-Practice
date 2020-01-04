//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./react-redux";
import { createStore } from "./store";
import { reducer } from "./reducer";

let store = createStore(reducer);

function logger1() {
  let next = store.dispatch;
  return (action) => {
    console.log("logger1");
    let ret = next(action);
    return ret;
  };
}
function thunk(store) {
  let next = store.dispatch;
  return (action) => {
    console.log("thunk");
    return typeof action === "function" ? action(store.dispatch) : next(action);
  };
}

function logger2(store) {
  let next = store.dispatch;
  return (action) => {
    console.log("logger2");
    let result = next(action);
    return result;
  };
}
function applyMiddleware(store, middlewares) {
  middlewares = [...middlewares];
  middlewares.reverse();
  middlewares.forEach((middleware) => (store.dispatch = middleware(store)));
}
applyMiddleware(store, [logger1, thunk, logger2]);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

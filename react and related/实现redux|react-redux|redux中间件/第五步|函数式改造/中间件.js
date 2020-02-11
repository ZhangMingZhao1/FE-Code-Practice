const logger = (store) => (next) => (action) => {
  console.log("log1");
  let result = next(action);
  return result;
};

const thunk = (store) => (next) => (action) => {
  console.log("thunk");
  const { dispatch, getState } = store;
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const logger2 = (store) => (next) => (action) => {
  console.log("log2");
  let result = next(action);
  return result;
};

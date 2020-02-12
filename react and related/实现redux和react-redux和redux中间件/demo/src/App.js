//App.js
import React from "react";
import { connect } from "./react-redux";

const addCountAction = {
  type: "plus"
};

// redux-thunk 可以dispatch 函数
const actionFun = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "plus" });
  }, 1000);
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => {
      dispatch(addCountAction);
    },
    asyncAddCount: () => dispatch(actionFun)
  };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.count}
        <button onClick={() => this.props.addCount()}>增加</button>
        {/* 如果点此按钮，到thunk中间件时，thunk检测到action为函数，
        重新执行dispatch，重新走一遍中间件，此时才会+1，打印
        logger1
        thunk
        logger1
        thunk
        logger2
        */}
        <button onClick={() => this.props.asyncAddCount()}>异步增加</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

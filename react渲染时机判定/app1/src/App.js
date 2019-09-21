import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Child1 extends React.Component {
  render() {
    console.log("Child1发生了重新计算，执行了render方法");
    return <div>{this.props.data}</div>;
  }
}

class Father extends React.Component {
  constructor() {
    super();
    this.a = 1;
  }
  handleClick = ()=>{
    console.log(1111);
    this.a++;
    console.log(this.a)
  }
  render() {
    console.log("Father发生了重新计算，执行了render方法")
    return <div> <Child1 data={this.a}/> <div onClick={this.handleClick}>按钮</div></div>;
  }
}
export default Father;

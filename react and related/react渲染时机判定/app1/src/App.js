import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Child1 extends React.Component {
  componentDidUpdate(){
    console.log('child componentDidUpdate')
  }
  // shouldComponentUpdate(){
  //   return false;
  // }
  render() {
    console.log("Child1发生了重新计算，执行了render方法");
    return <div>child</div>;
  }
}

class Father extends React.Component {
  constructor() {
    super();
    this.state={a:0}
  }
  handleClick = ()=>{
    this.setState({a:this.state.a+1})
  }
  render() {
    console.log("Father发生了重新计算，执行了render方法")
    return <div> <Child1 /> <div onClick={this.handleClick}>按钮</div></div>;
  }
}
export default Father;

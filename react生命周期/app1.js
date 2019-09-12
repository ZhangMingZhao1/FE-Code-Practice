import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    count:0
  }
  componentDidMount() {
    console.log('APP componentDidMount')
  }
  componentDidUpdate() {
    console.log('APP componentDidUpdate')
  }
  componentWillMount(){
    console.log('App componentWillMount')
  }
  // componentWillUnmount() {
  //   console.log('App componentWillUnmount')
  // }
  handleClick = ()=>{
    console.log('我点击了')
    this.setState({count:this.state.count+1});
    // App.a++;
    // console.log(App.a);
  }
  static a = 1;
  render() {
    console.log('APP render')
    return (
      <div className="App">
        <div onClick={this.handleClick}>我是按钮</div>
        <Child1 count={this.state.count}/>
      </div>
    );
  }
}

export default App;

class Child1 extends React.Component{
  constructor(props){
    super(props);
  }
  // componentWillUnmount() {
  //   console.log('Child1 componentWillUnmount')
  // }
  componentDidMount(){
    console.log('Child1 componentDidMount',this.props);
  }
  componentDidUpdate() {
    console.log('child1 componentDidUpdate',this.props.count);
  }
  componentWillMount(){
    console.log('Child1 componentWillMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    console.log('child1 render')
    return (
      <div>{this.props.count}</div>
    );
  }
}
/*
点击后的结果：
我点击了
App.js:22 APP render
App.js:45 {count: 1}
App.js:48 child1 render
App.js:42 child1 componentDidUpdate 1
App.js:12 APP componentDidUpdate
App.js:15 我点击了
App.js:22 APP render
App.js:45 {count: 2}
App.js:48 child1 render
App.js:42 child1 componentDidUpdate 2
App.js:12 APP componentDidUpdate
App.js:15 我点击了
App.js:22 APP render
App.js:45 {count: 3}
App.js:48 child1 render
App.js:42 child1 componentDidUpdate 3
App.js:12 APP componentDidUpdate

生命周期函数：render及render前是父组件先执行，render后是子组件先执行
注意这里子组件重新渲染的根本原因是因为父组件重新渲染了，并不是传给子的“props变了”
先执行父组件的render函数，进入子组件（带着新props），然后子组件重新执行render，子组件执行componentDidUpdate，然后返回到父组件，父组件执行DidUpdate
*/
import React from "react";
import "./App.css";
import Button from "antd/es/button";
import Menu from "antd/es/menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/**
 * 参考：https://zh-hans.reactjs.org/docs/react-component.html
 *      http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
class App extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="App">
        <div>我是标题</div>
        <div>
          <Button>按钮</Button>
        </div>
        <Router>
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Link to="/common/11">111</Link>
              </Menu.Item>
              <Menu.Item key="app">
                <Link to={"/common/22"}>222</Link>
              </Menu.Item>
              <Menu.Item key="none">
                <Link to={"/none"}>222</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="content">
            <Route path="/common/:id" component={MyCom} />
            <Route path="/none" component={None} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

class MyCom extends React.Component {
  state = {
    data:'moren'
  }
  componentDidMount(){
    console.log('common挂载了');
  }
  shouldComponentUpdate() {
    // console.log("update");
    return true;
  }
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.id)
    fetch("http://localhost:3101")
      .then(res=>res.json())
      .then(data=>{
        this.setState({data:JSON.stringify(data)})
        // console.log(JSON.stringify(data));
      })
  }
  render() {
    const dd = this.props.match.params.id;
    return <div>{this.state.data}</div>;
  }
}

class None extends React.Component {
  componentDidMount(){
    console.log('componentDidMount挂载了');
  }
  render() {
    return (
      <div>
        None
      </div>
    )
  }
}
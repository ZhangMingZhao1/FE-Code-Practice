import React, { Component } from 'react';
import { Menu} from 'antd';
import { connect } from 'dva';
import {
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom'
import { Switch } from 'dva/router'
import PictureContainer from '../PictureContainer';
import Standing from '../Standing';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Mmenu extends Component {
  handleClick=(e)=>{
    console.log(e.key);
    this.props.dispatch( {
      type: 'changeMenu/change',
      payload: {
        key:e.key
      }
    })
  }
  render() {
    let {cur} = this.props;
    console.log(this.props);
    console.log('cur',cur);
    return (
      <BrowserRouter>
          <div>
            <Menu
            // theme="dark"
            onClick={this.handleClick}
            selectedKeys={cur}
            defaultSelectedKeys="picture"
            mode="horizontal"
          >
            <Menu.Item key="picture">
              <Link to="/picture">图片</Link>
            </Menu.Item>
            <Menu.Item key="standing">
              <Link to="/standing">可视化排名</Link>
            </Menu.Item>
          </Menu>
          <Switch>
              <Route path="/" exact component={PictureContainer} />
              <Route path="/picture" component={PictureContainer} /> 
           </Switch>
          
          <Route path="/standing" component={Standing} /> 
        </div>
     </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state.changeMenu.key',state.changeMenu.key);
  return {
    cur: state.changeMenu.key,
  }
};

export default connect(mapStateToProps)(Mmenu);
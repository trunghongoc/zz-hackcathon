import React, { Component } from 'react';
import { Menu, Icon, message } from 'antd';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import axios from 'axios';
import * as Constants from './../constants/var'
import { Redirect } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

class Navbar extends Component {
  state = {
    current: 'dashboard',
    history: createHistory(),
    redirect: false
  }

  componentDidMount() {
    let pathName = this.state.history.location.pathname.replace('/', '')
    this.setState({
      current: pathName
    })
  }

  showMess = (success) => {
    if (success) {
        message.success('Đăng xuất thành công', 1)
        this.setState({
          redirect: true
        })

        this.setState({
          redirect: false
        })
    } else {
        message.error('Xảy ra lỗi', 1)
    }
  }

  logout = () => {
    axios.post(Constants.logoutRoute, this.state)
    .then(
        (res) => { this.showMess(true) },
        (error) => { this.showMess(false) }
    );
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { redirect } = this.state
    return (
      <div>
      {!redirect &&
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="dashboard">
          <Link to="/dashboard"><Icon type="home" />Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="users">
          <Link to="/users"><Icon type="team" />Nhân viên</Link>
        </Menu.Item>

        <Menu.Item key="templates">
          <Link to="/templates"><Icon type="skin" />Templates</Link>
        </Menu.Item>

        <Menu.Item key="containers">
          <Link to="/containers"><Icon type="database" />Containers</Link>
        </Menu.Item>

        <SubMenu title={<span><Icon type="setting" />Trung</span>} className="float-right">
          <Menu.Item key="setting:1">
            <Link to="/profile">Trang cá nhân</Link>
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={ this.logout }>Đăng xuất</Menu.Item>
        </SubMenu>
      </Menu>
      }
      {
        redirect &&
        <Redirect to="/login"/>
      }
      </div>
    );
  }
}

export default Navbar;

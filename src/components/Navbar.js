import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

const SubMenu = Menu.SubMenu;

class Navbar extends Component {
  state = {
    current: 'dashboard',
    history: createHistory()
  }

  componentDidMount() {
    let pathName = this.state.history.location.pathname.replace('/', '')
    this.setState({
      current: pathName
    })
  }

  logout = () => {
    alert('logout')
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
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
    );
  }
}

export default Navbar;

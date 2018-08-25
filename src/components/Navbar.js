import React, { Component } from 'react';
import { Menu, Icon, message } from 'antd';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import axios from 'axios';
import * as Constants from './../constants/var'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from './../actions/staff'

function mapStateToProps(state: Object): Object {
  return {
    data: state.usersReducer
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actRedux: bindActionCreators(userAction, dispatch)
  }
}

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

  showMess = (success) => {
    if (success) {
        message.success('Đăng xuất thành công', 1)
    } else {
        message.error('Xảy ra lỗi', 1)
    }
  }

  logout = () => {
    axios.post(Constants.logoutRoute, this.state)
    .then(
        (res) => { this.showMess(true); this.fakeLogout(); },
        (error) => { this.showMess(false); this.fakeLogout(); }
    );
  }

  fakeLogout = () => {
    this.props.actRedux.actSetUser({
        loged: false
    })

    localStorage.removeItem('user')
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <div></div>
    }

    let title = <span><Icon type="setting" />{userRedux.info.name}</span>

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

        <SubMenu title={title} className="float-right">
          <Menu.Item key="setting:1">
            <Link to="/profile">Trang cá nhân</Link>
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={ this.logout }>Đăng xuất</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import UserCreateForm from './../form/UserCreate'

class UsersCreate extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Nhân viên</Breadcrumb.Item>
          <Breadcrumb.Item>New nhân viên</Breadcrumb.Item>
        </Breadcrumb>,

        <UserCreateForm/>
      </div>
    );
  }
}

export default UsersCreate
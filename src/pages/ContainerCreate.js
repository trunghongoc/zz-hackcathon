import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import ContainerCreateForm from './../form/ContainerCreate'

class UsersCreate extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Containers</Breadcrumb.Item>
          <Breadcrumb.Item>New Container</Breadcrumb.Item>
        </Breadcrumb>,

        <ContainerCreateForm/>
      </div>
    );
  }
}

export default UsersCreate
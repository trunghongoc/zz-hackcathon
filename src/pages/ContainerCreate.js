import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import ContainerCreateForm from './../form/ContainerCreate'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function mapStateToProps(state: Object): Object {
  return {
    data: state.usersReducer
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

class UsersCreate extends Component {
  render() {
    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersCreate)

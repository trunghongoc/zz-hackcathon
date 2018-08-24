import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import TemplateCreateForm from './../form/TemplateCreate'

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

class TemplateCreate extends Component {
  render() {
    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Templates</Breadcrumb.Item>
          <Breadcrumb.Item>New Template</Breadcrumb.Item>
        </Breadcrumb>,

        <TemplateCreateForm/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCreate)

import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import TemplateCreateForm from './../form/TemplateCreate'

class TemplateCreate extends Component {
  render() {
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

export default TemplateCreate
import React, { Component } from 'react';
import { Table, Breadcrumb } from 'antd';

class Dashboard extends Component {
  state = {
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      width: 200,
    }, {
      title: 'Số containers',
      dataIndex: 'containerNuber',
      width: 100,
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      width: 200,
    }, {
      title: 'Email',
      dataIndex: 'email',
      width: 200,
    }],
    dataSource: [{
      key: 1,
      name: 'Minh Minh',
      containerNuber: 69,
      phone: '26276827687',
      actived: true,
      email: 'minh@dghdghjdh.com'
    },
    {
      key: 2,
      name: 'Ducvm',
      containerNuber: 2,
      phone: '7638976839768',
      actived: true,
      email: 'ducvm@dghdghjdh.com'
    }]
  };

  render() {
    let { dataSource, columns } = this.state

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>,

        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default Dashboard;

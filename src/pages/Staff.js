import React, { Component } from 'react';
import { Table } from 'antd';

class Staff extends Component {
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
      title: 'Actived',
      dataIndex: 'actived',
      width: 100,
    }, {
      title: 'Email',
      key: 'email',
      render: (email) => (
        <span>email</span>
      ),
      width: 200,
    }],
    dataSource: [{
      key: 1,
      name: 'Minh Minh',
      containerNuber: 69,
      phone: false,
      actived: true,
      email: 'minh@dghdghjdh.com'
    },
    {
      key: 2,
      name: 'Ducvm',
      containerNuber: 2,
      phone: false,
      actived: true,
      email: 'ducvm@dghdghjdh.com'
    }]
  };

  render() {
    let { dataSource, columns } = this.state

    return (
      <div>
        <h5>Nhan vien page</h5>

        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default Staff;

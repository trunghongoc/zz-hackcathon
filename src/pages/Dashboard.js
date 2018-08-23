import React, { Component } from 'react';
import { Breadcrumb, message } from 'antd';
import Table from './../components/Table'
import * as Constants from './../constants/var'
import axios from 'axios';

class Dashboard extends Component {
  state = {
    header: [
      {title: 'Name', key: 'user_name'},
      {title: 'Chức vụ', key: 'investion'},
      {title: 'Email', key: 'user_email'},
      {title: 'Số container', key: 'container_number'}
    ],
    data: [
      {id: 1, user_name: 'Justin Bieber', investion: 'Thực tập', user_email: 'a@a.com', container_number: 69},
      {id: 2, user_name: 'Phạm Băng Băng', investion: 'Team leader', user_email: 'b@a.com', container_number: 2}
    ]
  }

  componentDidMount() {
    axios.post(Constants.dashboardRoute, {})
    .then(
      (res) => {
        console.log(res)
      },
      (error) => { this.showMess(false) }
    );
  }

  showMess = (success) => {
    if (success) {
    } else {
      message.error('Xảy ra lỗi', 1)
    }
  }

  render() {
    let { header, data } = this.state

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>,

        <h5>Tổng quan nhân viên</h5>
        <p>{data.length} total</p>

        <Table header={header} data={data} />
      </div>
    );
  }
}

export default Dashboard

import React, { Component } from 'react';
import { Breadcrumb, message, Button } from 'antd';
import * as Constants from './../constants/var'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from './../components/Table'

class Container extends Component {

  state = {
    header: [
      {title: 'Container', key: 'containers_name'},
      {title: 'Status', key: 'containers_status'},
      {title: 'Size', key: 'size'},
      {title: 'Date', key: 'containers_date'}
    ],
    data: [
      {containers_name: 'Dev-ruby', size: '500Mb', cpu: '4 core', ram: '8Gb', containers_status: 'Running', containers_size: 300, containers_date: 'Aug 20, 2018'},
      {containers_name: 'Dev-php', size: '500Mb', cpu: '4 core', ram: '7Gb', containers_status: 'Running', containers_size: 300, containers_date: 'Aug 20, 2018'},
      {containers_name: 'Dev-IOS', size: '500Mb', cpu: '4 core', ram: '7Gb', containers_status: 'Running', containers_size: 300, containers_date: 'Aug 20, 2018'}
    ]
  }

  componentDidMount() {
    const user_id = Number(this.props.match.params.id)
    axios.post(Constants.userDetailRoute, {user_id})
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
    const { header, data } = this.state

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Containers</Breadcrumb.Item>
        </Breadcrumb>,

        <div className="row">
          <div className="col col-12">
            <div className="mr-t-20"></div>
          </div>
          <div className="col col-6">
            <h5>Danh sách Containers</h5>
            <p>{data.length} cái</p>
          </div>
          <div className="col col-6 text-right">
            <Link to="/containers/create">
              <Button type="primary" icon="plus">Container</Button>
            </Link>
          </div>
        </div>

        <Table header={header} data={data} />
      </div>
    );
  }
}

export default Container
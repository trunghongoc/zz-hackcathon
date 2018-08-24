import React, { Component } from 'react';
import { Breadcrumb, message, Button } from 'antd';
import * as Constants from './../constants/var'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from './../components/Table'

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

  state = {
    user: {
      id: 1,
      user_name: "Hồ Ngọc Trung",
      notes: 'notes',
      user_email: 'trung.hn@zinza.com.vn',
      phone: '0123456789'
    },
    containers: {
      header: [
        {title: 'Container', key: 'containers_name'},
        {title: 'Cpu', key: 'cpu'},
        {title: 'Date', key: 'containers_date'},
        {title: 'Status', key: 'containers_status'},
        {title: 'Ram', key: 'ram'}
      ],
      data: [
        {containers_name: 'Dev-ruby', cpu: '4 core', ram: '8Gb', containers_status: 'Running', containers_size: 300, containers_date: 'Aug 20, 2018'},
        {containers_name: 'Dev-php', cpu: '4 core', ram: '7Gb', containers_status: 'Running', containers_size: 300, containers_date: 'Aug 20, 2018'}
      ]
    }
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
    const { user, containers } = this.state

    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Nhân viên</Breadcrumb.Item>
          <Breadcrumb.Item>Trung Hồ  Ngọc</Breadcrumb.Item>
        </Breadcrumb>,

        <div className="row">
          <div className="col col-6">
            <h5>Detail</h5>

            <p className="user-detail-table-opacity">
              <span>Name:</span>
              <span>{user.user_name}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Note:</span>
              <span>{user.notes}</span>
            </p>
          </div>

          <div className="col col-6">
            <h5>Contact</h5>

            <p className="user-detail-table-opacity">
              <span>Email:</span>
              <span>{user.user_email}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Phone:</span>
              <span>{user.phone}</span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col col-12">
            <div className="mr-t-20"></div>
          </div>
          <div className="col col-6">
            <h5>Containers</h5>
            <p>{containers.data.length} cái</p>
          </div>
          <div className="col col-6 text-right">
            <Link to="/containers/create">
              <Button type="primary" icon="plus">Container</Button>
            </Link>
          </div>
        </div>

        <Table header={containers.header} data={containers.data} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersCreate)

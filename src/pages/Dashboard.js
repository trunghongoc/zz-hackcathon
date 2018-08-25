import React, { Component } from 'react';
import { Breadcrumb, message } from 'antd';
import Table from './../components/Table'
import * as Constants from './../constants/var'
import axios from 'axios';

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

class Dashboard extends Component {
  state = {
    header: [
      {title: 'Name', key: 'name'},
      {title: 'Chức vụ', key: 'position'},
      {title: 'Email', key: 'email'},
      {title: 'Số container', key: 'sum_'}
    ],
    data: [
    ]
  }

  componentDidMount() {
    axios.post(Constants.dashboardRoute, {})
    .then(
      (res) => {
        let data = res.data
        let arrs = []
        data.forEach(item => {
          let i = { ...item }
          i.id = item.user_id
          arrs.push(i)
        });
        this.setState({
          data: arrs
        })
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

    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>,

        <h5>Tổng quan nhân viên</h5>
        <p>{data.length} total</p>

        <Table header={header} data={data} hasUser={true} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

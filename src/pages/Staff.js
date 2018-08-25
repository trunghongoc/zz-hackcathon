import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import Table from './../components/Table'
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
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

class Staff extends Component {
  state = {
    header: [
      {title: 'Name', key: 'name'},
      {title: 'Số container', key: 'total'},
      {title: 'Phone', key: 'phone'},
      {title: 'Email', key: 'email'}
    ],
    data: [
    ]
  }

  componentDidMount() {
    axios.post(Constants.usersRoute, {})
    .then(
      (res) => {
        let data = res.data
        let arrs = []
        data.forEach(item => {
          let i = { ...item }
          i.id = item.user_id
          arrs.push(i)
        });
        console.log(res)
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
          <Breadcrumb.Item>Nhân viên</Breadcrumb.Item>
        </Breadcrumb>,

        <div className="row">
          <div className="col col-6">
            <h5>Nhân viên</h5>
            <p>{data.length} Người</p>
          </div>
          <div className="col col-6 text-right">
            <Link to="/users/create">
              <Button type="primary" icon="plus">Nhân viên</Button>
            </Link>
          </div>
        </div>
        <Table header={header} data={data} hasUser={true} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff)

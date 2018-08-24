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

class TemplateDetail extends Component {

  state = {
    name: '',
    group: '',
    note: '',
    date: 'Aug 20, 2018',
    path: '',
    size: '500',
    users: {
        header: [
            {title: 'Name', key: 'user_name'},
            {title: 'Email', key: 'user_email'},
            {title: 'Issue Date', key: 'issue_date'},
            // {title: 'Actived', key: 'active'},
        ],
        data: [
            {user_name: 'Pằng Pằng Pằng', user_email: 'r@v.com', issue_date: 'Aug 20, 2018'},
            {user_name: 'Âu Cơ', user_email: 'q@b.com', issue_date: 'Aug 20, 2018'}
        ]
    }
  }

  componentDidMount() {
    const container_id = Number(this.props.match.params.id)
    axios.post(Constants.templatesDetailRoute, {container_id})
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
    const { name, group, note, date, path, size } = this.state
    const { header, data } = this.state.users

    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Template</Breadcrumb.Item>
          <Breadcrumb.Item>Dev-php</Breadcrumb.Item>
        </Breadcrumb>,

        <div className="row">
          <div className="col col-12">
            <h5>Infomation</h5>
          </div>
          <div className="col col-6">
            <p className="user-detail-table-opacity">
              <span>Name:</span>
              <span>{name}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Nhóm:</span>
              <span>{group}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Note:</span>
              <span>{note}</span>
            </p>
          </div>

          <div className="col col-6">
            <p className="user-detail-table-opacity">
              <span>Ngày tạo:</span>
              <span>{date}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Path:</span>
              <span>{path}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Size:</span>
              <span>{size} MB</span>
            </p>
          </div>
        </div>

        <div className="row">
            <div className="col col-12">
                <div className="mr-t-20"></div>
            </div>
            <div className="col col-6">
                <h5>Containers</h5>
                <p>{data.length} cái</p>
            </div>
            <div className="col col-6 text-right">
                <Link to="/containers/create">
                <Button type="primary" icon="plus">Template</Button>
                </Link>
            </div>
        </div>

        <Table header={header} data={data} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateDetail)

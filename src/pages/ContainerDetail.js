import React, { Component } from 'react';
import { Breadcrumb, message, Button } from 'antd';
import * as Constants from './../constants/var'
import axios from 'axios';
// import { Link } from 'react-router-dom';
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

class ContainerDetail extends Component {

  state = {
    name: '',
    assignee: '',
    template: {id: 1, name: 'Dev-php'},
    date: 'Aug 20, 2018',
    cpu: '4 core',
    memory: '500MB'
  }

  componentDidMount() {
    const container_id = Number(this.props.match.params.id)
    axios.post(Constants.containersDetailRoute, {container_id})
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
    const { name, assignee, template, date, cpu, memory  } = this.state

    const userRedux = this.props.data.user
    if (!userRedux.loged) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Containers</Breadcrumb.Item>
          <Breadcrumb.Item>Dev-php Ducvm</Breadcrumb.Item>
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
              <span>Assignee:</span>
              <span>{assignee}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Template:</span>
              <span>{template.name}</span>
            </p>
          </div>

          <div className="col col-6">
            <p className="user-detail-table-opacity">
              <span>Ngày tạo:</span>
              <span>{date}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>CPU:</span>
              <span>{cpu}</span>
            </p>

            <p className="user-detail-table-opacity">
              <span>Memory:</span>
              <span>{memory} MB</span>
            </p>
          </div>
        
          <div className="col col-12">
            <Button type="primary" className="mr-r-10">Edit</Button>
            <Button type="danger">Delete</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDetail)

import React, { Component } from 'react';
import { Breadcrumb, message, Button } from 'antd';
import Table from './../components/Table'
import * as Constants from './../constants/var'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Template extends Component {
  state = {
    header: [
      {title: 'Name', key: 'template_name'},
      {title: 'Số lượng user', key: 'user_total'},
      {title: 'Size', key: 'size'},
      {title: 'Date', key: 'date'}
    ],
    data: [
      {id: 1, template_name: 'Dev-ruby', user_total: 9, size: 500, date: 'Aug 20, 2018'},
      {id: 2, template_name: 'Dev-php', user_total: 9, size: 500, date: 'Aug 20, 2018'}
    ]
  }

  componentDidMount() {
    axios.post(Constants.templatesRoute, {})
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
          <Breadcrumb.Item>Templates</Breadcrumb.Item>
        </Breadcrumb>,

        <div className="row">
          <div className="col col-12">
            <div className="mr-t-20"></div>
          </div>
          <div className="col col-6">
            <h5>Templates</h5>
            <p>{data.length} cái</p>
          </div>
          <div className="col col-6 text-right">
            <Link to="/templates/create">
              <Button type="primary" icon="plus">Template</Button>
            </Link>
          </div>
        </div>

        <Table header={header} data={data} />
      </div>
    );
  }
}

export default Template

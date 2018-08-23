import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import Table from './../components/Table'
import { connect } from 'react-redux'

function mapStateToProps(state: Object): Object {
  return {
    dashboard: state.dashboardReducer
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

class Dashboard extends Component {
  render() {
    let { header, data } = this.props.dashboard
    console.log(this.props)

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

import React, { Component } from 'react';
import LoginForm from './../form/Login'

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

class Login extends Component {
  render() {
    const userRedux = this.props.data.user
    console.log(userRedux)
    if (userRedux.loged) {
      return <Redirect to="/dashboard"/>
    }
    return (
      <LoginForm/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

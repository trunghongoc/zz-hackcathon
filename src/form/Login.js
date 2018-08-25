import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import * as Constants from './../constants/var'
import Input from './../components/Input'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from './../actions/staff'

function mapStateToProps(state: Object): Object {
  return {
    data: state.usersReducer
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
      actRedux: bindActionCreators(userAction, dispatch)
  }
}

class LoginForm extends Component {
    state = {
        mail: '',
        password: ''
    }

    showMess = (success, mess = '', type = 'success') => {
        if (mess === '') {
            if (success) {
                this.reset()
                message.success('Đăng nhập thành công', 1)
            } else {
                message.error('Xảy ra lỗi', 1)
            }
        } else {
            if (type === 'success')
                message.success(mess, 1)
            else
                message.error(mess, 1)
        }
    }

    reset = () => {
        const state = {
            mail: '',
            password: ''
        }
        this.setState({...state})
    }

    handleSubmit = (values) => {
        axios.post(Constants.loginRoute, this.state)
        .then(
            (res) => { this.loginSuccess(res); },
            (error) => { this.showMess(false); }
        );
    }

    loginSuccess = (res) => {
        let data = res.data
        if (data.result) {
            let user = {
                loged: true,
                info: data.user
            }
            user.info.id = data.user.user_id
            localStorage.setItem('user', JSON.stringify(user))
            this.props.actRedux.actSetUser(user)
            this.showMess(true)
        } else {
            this.showMess(true, 'Tài khoản hoặc mật khẩu không chính xác!', 'error')
        }
    }

    onChangeValue = (name, value) => {
        var obj  = {}
        obj[name] = value
        this.setState({
            ...obj
        })
    }

  render() {
    let { mail, password } = this.state
    return (
      <div className="login-form">
        <h5 className="text-center">Smart Office</h5>
        <p className="text-center">Let's get started. Please Login.</p>

        <Input onChangeValue={this.onChangeValue} value={mail} kind="input" classList="mr-t-10" label="Email" placeholder="" name="mail" type="email" iconName="mail"/>
        <Input onChangeValue={this.onChangeValue} value={password} kind="input" classList="mr-t-10" label="Password" placeholder="" name="password" type="password" iconName="key"/>

        <div className="mr-t-20 text-right">
            <Button type="primary" onClick={this.handleSubmit}>Login</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

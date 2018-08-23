import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import * as Constants from './../constants/var'
import Input from './../components/Input'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    showMess = (success) => {
        if (success) {
            this.reset()
            message.success('Đăng nhập thành công', 1)
        } else {
            message.error('Xảy ra lỗi', 1)
        }
    }

    reset = () => {
        const state = {
            email: '',
            password: ''
        }
        this.setState({...state})
    }

    handleSubmit = (values) => {
        axios.post(Constants.loginRoute, this.state)
        .then(
            (res) => { this.showMess(true) },
            (error) => { this.showMess(false) }
        );
    }
    
    onChangeValue = (name, value) => {
        var obj  = {}
        obj[name] = value
        this.setState({
            ...obj
        })
    }

  render() {
    let { email, password } = this.state
    return (
      <div className="login-form">
        <h5 className="text-center">Smart Office</h5>
        <p className="text-center">Let's get started. Please Login.</p>

        <Input onChangeValue={this.onChangeValue} value={email} kind="input" classList="mr-t-10" label="Email" placeholder="" name="email" type="email" iconName="mail"/>
        <Input onChangeValue={this.onChangeValue} value={password} kind="input" classList="mr-t-10" label="Password" placeholder="" name="password" type="password" iconName="key"/>

        <div className="mr-t-20 text-right">
            <Button type="primary" onClick={this.handleSubmit}>Login</Button>
        </div>
      </div>
    );
  }
}

export default LoginForm
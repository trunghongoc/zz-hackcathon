import React, { Component } from 'react';
// import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './../components/Input'
import { Button, message } from 'antd';
import axios from 'axios';
import * as Constants from './../constants/var'
import { Link } from 'react-router-dom';

class UserCreateForm extends Component {
  state = {
    name: '',
    phone: '',
    note: '',
    position: '',
    email: ''
  }

  showMess = (success) => {
    if (success) {
      this.reset()
      message.success('Thêm thành công', 1)
    } else {
      message.error('Xảy ra lỗi', 1)
    }
  }

  reset = () => {
    const state = {
      name: '',
      phone: '',
      note: '',
      position: '',
      email: ''
    }
    this.setState({...state})
  }

  handleSubmit = (values) => {
    let { name, phone, note, position, email } = this.state
    axios.post(Constants.createUserRoute, {name, phone, note, position, email})
    .then(
      (res) => {
        let result = res.data.result
        if(result)
          this.showMess(true)
        else
          this.showMess(false)
      },
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
    const { handleSubmit } = this
    let { name, phone, note, position, email } = this.state

    return (
      <div onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={name} kind="input" classList="mr-t-10" label="Họ tên" placeholder="e.g., Acme Corp, Inc." name="name" type="text" iconName="user"/>
            <Input onChangeValue={this.onChangeValue} value={phone} kind="input" classList="mr-t-10" label="Số điện thoại" placeholder="(555) 555 555" name="phone" type="text" iconName="phone"/>
            <Input onChangeValue={this.onChangeValue} value={note} kind="textarea" classList="mr-t-10" label="Note" placeholder="" name="note" type="text" iconName="phone"/>
          </div>

          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={position} kind="input" classList="mr-t-10" label="Chức vụ" placeholder="e.g., Shally Investson" name="position" type="text" iconName="star-o"/>
            <Input onChangeValue={this.onChangeValue} value={email} kind="input" classList="mr-t-10" label="Email Address" placeholder="trung.hn@zinza.com.vn" name="email" type="email" iconName="mail"/>
          </div>
          <div className="col col-6"></div>

          <div className="col col-12">
            <div className="mr-t-20"></div>
            <Button type="primary" className="mr-r-10" onClick={handleSubmit}>Create</Button>

            <Link to="/users">
              <Button>Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

};

export default UserCreateForm
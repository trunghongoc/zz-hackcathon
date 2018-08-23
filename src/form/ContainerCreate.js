import React, { Component } from 'react';
// import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './../components/Input'
import { Button, message } from 'antd';
import axios from 'axios';
import * as Constants from './../constants/var'
import { Link } from 'react-router-dom';

class ContainerCreateForm extends Component {
  state = {
    user_name: '',
    template: [
      {id: 1, name: 'Dev-php'},
      {id: 2, name: 'Dev-ruby'}
    ],
    users: [
      {id: 1, name: 'Hồ Ngọc Trung'},
      {id: 2, name: 'Nguyễn Văn An'}
    ],
    cpu: '',
    memory: '',
    notes: '',
    template_id: '',
    user_id: ''
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
      user_name: '',
      template: [
        {id: 1, name: 'Dev-php'},
        {id: 2, name: 'Dev-ruby'}
      ],
      users: [
        {id: 1, name: 'Hồ Ngọc Trung'},
        {id: 2, name: 'Nguyễn Văn An'}
      ],
      cpu: '',
      memory: '',
      notes: '',
      template_id: 1,
      user_id: 1
    }
    this.setState({...state})
  }

  handleSubmit = (values) => {
    axios.post(Constants.containersCreateRoute, this.state)
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
    const { handleSubmit } = this
    let { containers_name, template, users, cpu, memory, notes } = this.state

    return (
      <div onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={containers_name} kind="input" classList="mr-t-10" label="Name" placeholder="e.g., Acme Corp, Inc." name="containers_name" type="text" iconName="smile-o"/>
            <Input onChangeValue={this.onChangeValue} defaultValue="" selects={template} kind="select" classList="mr-t-10" label="Template" placeholder="" name="template_id"/>
            <Input onChangeValue={this.onChangeValue} defaultValue="" selects={users} kind="select" classList="mr-t-10" label="Assignee" placeholder="" name="user_id"/>
          </div>

          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={cpu} kind="input" classList="mr-t-10" label="CPU" placeholder="4 core" name="cpu" type="number" iconName="smile-o"/>
            <Input onChangeValue={this.onChangeValue} value={memory} kind="input" classList="mr-t-10" label="Memory" placeholder="8GB" name="memory" type="number" iconName="smile-o"/>
            <Input onChangeValue={this.onChangeValue} value={notes} kind="textarea" classList="mr-t-10" label="Notes" placeholder="" name="notes" iconName="edit"/>
          </div>
          <div className="col col-6"></div>

          <div className="col col-12">
            <div className="mr-t-20"></div>
            <Button type="primary" className="mr-r-10" onClick={handleSubmit}>Create</Button>

            <Link to="/containers">
              <Button>Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

};

export default ContainerCreateForm
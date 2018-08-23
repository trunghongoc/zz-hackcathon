import React, { Component } from 'react';
// import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './../components/Input'
import { Button, message } from 'antd';
import axios from 'axios';
import * as Constants from './../constants/var'
import { Link } from 'react-router-dom';

class TemplateCreateForm extends Component {
  state = {
    template_name: '',
    image_path: '',
    group: '',
    notes: ''
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
        template_name: '',
        image_path: '',
        group: '',
        notes: ''
    }
    this.setState({...state})
  }

  handleSubmit = (values) => {
    axios.post(Constants.templatesCreateRoute, this.state)
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
    let { template_name, image_path, group, notes } = this.state

    return (
      <div onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={template_name} kind="input" classList="mr-t-10" label="Name" placeholder="e.g., Dev-php" name="template_name" type="text" iconName="smile-o"/>
            <Input onChangeValue={this.onChangeValue} value={image_path} kind="input" classList="mr-t-10" label="Image Path" placeholder="" name="image_path" iconName="smile-o"/>
            <Input onChangeValue={this.onChangeValue} value={group} kind="input" classList="mr-t-10" label="Nhóm" placeholder="" name="group" iconName="smile-o"/>
          </div>

          <div className="col col-6">
            <Input onChangeValue={this.onChangeValue} value={notes} kind="textarea" classList="mr-t-10" label="Notes" placeholder="" name="notes" iconName="edit"/>
          </div>
          <div className="col col-6"></div>

          <div className="col col-12">
            <div className="mr-t-20"></div>
            <Button type="primary" className="mr-r-10" onClick={handleSubmit}>Create</Button>

            <Link to="/templates">
              <Button>Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

};

export default TemplateCreateForm
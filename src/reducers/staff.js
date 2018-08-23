// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
  header: [
    {title: 'Name', key: 'user_name'},
    {title: 'Số container', key: 'container_number'},
    {title: 'Phone', key: 'phone'},
    {title: 'Email', key: 'user_email'}
  ],
  data: [
    {user_name: 'Justin Bieber', investion: 'Thực tập', user_email: 'a@a.com', container_number: 69, phone: '999999999'},
    {user_name: 'Phạm Băng Băng', investion: 'Team leader', user_email: 'b@a.com', container_number: 2, phone: '123456999'}
  ]
}

const staff = handleActions({
  [ActionTypes.GET_STAFF]: (state: any, action: any): any => {
    return { ...state }
  },
  [ActionTypes.CREATE_USER]: (state: any, action: any): any => {
    console.log(action)
    return { ...state }
  }
}, initialState)

export default staff
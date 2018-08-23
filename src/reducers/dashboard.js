// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
  header: [
    {title: 'Name', key: 'user_name'},
    {title: 'Chức vụ', key: 'investion'},
    {title: 'Email', key: 'user_email'},
    {title: 'Số container', key: 'container_number'}
  ],
  data: [
    {user_name: 'Justin Bieber', investion: 'Thực tập', user_email: 'a@a.com', container_number: 69},
    {user_name: 'Phạm Băng Băng', investion: 'Team leader', user_email: 'b@a.com', container_number: 2}
  ]
}

const dashboard = handleActions({
  [ActionTypes.GET_DASHBOARD]: (state: any, action: any): any => {
    return { ...state }
  }
}, initialState)

export default dashboard

// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
  header: ['Name', 'Chức vụ', 'Email', 'Số container'],
  data: [
    {user_name: 'Justin Bieber', investion: 'Thực tập', user_email: 'a@a.com', container_number: 69},
    {user_name: 'Phạm Băng Băng', investion: 'Team leader', user_email: 'b@a.com', container_number: 2}
  ]
}

const demo = handleActions({
  [ActionTypes.DEMO]: (state: any, action: any): any => {
    return { ...state }
  }
}, initialState)

export default demo


// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import dashboardReducer from './dashboard'
import usersReducer from './staff'

const rootReducer = combineReducers({
    form: formReducer,
    dashboardReducer,
    usersReducer
})

export default rootReducer
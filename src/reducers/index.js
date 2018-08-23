
// @flow
import { combineReducers } from 'redux'

import dashboardReducer from './dashboard'

const rootReducer = combineReducers({
    dashboardReducer,
})

export default rootReducer
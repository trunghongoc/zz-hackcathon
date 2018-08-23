import * as ActionTypes from './action_types'

export function actGet(value = null) {
    return {
        type: ActionTypes.GET_DASHBOARD,
        payload: value
    }
}

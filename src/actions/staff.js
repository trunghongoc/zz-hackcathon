import * as ActionTypes from './action_types'

export function actGet(value = null) {
    return {
        type: ActionTypes.GET_STAFF,
        payload: value
    }
}

export function actCreate(value = null) {
    return {
        type: ActionTypes.CREATE_USER,
        payload: value
    }
}

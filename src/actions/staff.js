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

export function actGetUser(value = null) {
    return {
        type: ActionTypes.USER_INFO,
        payload: value
    }
}

export function actSetUser(value = null) {
    return {
        type: ActionTypes.USER_INFO_SET,
        payload: value
    }
}
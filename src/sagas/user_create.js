// @flow
import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as ActionTypes from '../actions/action_types';
import { actCreate } from '../actions/staff';
import { createUserPromiseSagaFunc } from '../services/api';

export function* getData(action) {
    // const { data, error }  = yield call(fetchDataPromiseSagaFunc, action.payload, action.meta)
    const { resultFetch } = yield all({
        resultFetch: call(createUserPromiseSagaFunc, action.payload, action.meta)
    })
    const { data, error } = resultFetch
    if (data && !error) {
        const payload = {}
        payload.data = data.body
        const meta = { statusCode: data.statusCode }
        //yield put(actFetchDataAlertOK({data: payload.data, meta, success: true}))
    } else {
        //yield put(actFetchDataAlertFail({success: false}))
    }
}

export function* watchCreateUser() {
  yield takeLatest(ActionTypes.CREATE_USER, getData);
}
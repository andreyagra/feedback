import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { INVITES, actions } from 'api/actions';
import { FEEDBACK_INVITES_INVITE_COMPLETED } from 'api/actions';


function get() {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const url = '/status/status.json';
  return fetch(url, config)
          .then(response => response.json())
          .then(json => json);
}

function* getStatusBellNotify() {

  try {
    const status = yield call(get);
    
    yield put({type:FEEDBACK_INVITES_INVITE_COMPLETED, payload: status });
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}


export function* getBellNotify() {
  yield* takeEvery('getStatus', getStatusBellNotify);
  // yield* takeEvery('*_SAVE',getStatusBellNotify);
}

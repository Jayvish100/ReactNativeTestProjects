import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    // API CALL
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: '3676',
        name: 'Jay',
        email: 'jake@test.com',
      },
    });
  } catch (err) {
    // Handle error
  }
}

export {handler};

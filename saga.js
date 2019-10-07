import {
  all, call, put, take, takeEvery,
} from 'redux-saga/effects';


export function* incrementAsync() {
  yield put({ type: 'SET_ROWS_AND_COLS' });
}

export function* watchRowsAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchRowsAsync(),
  ]);
}

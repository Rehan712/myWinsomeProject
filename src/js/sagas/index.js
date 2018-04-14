import getAchieversDataSaga from './getAchieversDataSaga';
import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';

function* watchAchieversDataSaga() {
	yield takeLatest(types.GET_ACHIEVERS_DATA, getAchieversDataSaga);
}

export default function* rootSaga() {
	yield all([watchAchieversDataSaga()]);
}

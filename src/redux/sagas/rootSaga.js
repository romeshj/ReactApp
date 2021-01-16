import { all } from 'redux-saga/effects';
import OlympicWinnersSaga from './olympic-saga';
import DogsSaga from './dogs-saga';
import ChannelNewsSaga from './channelnews-saga';
import ABNNewsSaga from './abnnews-saga';

function* watchAll() {
   yield all([
		DogsSaga(),
		OlympicWinnersSaga(),
		ChannelNewsSaga(),
		ABNNewsSaga()
   ]);
}

export default watchAll;


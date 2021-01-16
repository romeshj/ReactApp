import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/action-types';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherChannelNewsSaga() {
  yield takeLatest("CHANNEL_NEWS_API_CALL_REQUEST", workerChannelNewsSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPosts(channel) {
console.log( " IN SAGA ", channel)
const channelString = channel.payload;
  const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';
  return axios({
    method: "get",
    url: "https://newsapi.org/v1/articles?source=" + channelString + "&apiKey=" + MY_API_KEY
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerChannelNewsSaga(channel){
	try {
		const response = yield call(fetchPosts, channel);
		
		const posts = response.data.articles;
		console.log(posts);
		// dispatch a success action to the store with the new dog
		yield put({ type: "CHANNEL_NEWS_API_CALL_SUCCESS", posts });
	}
	catch(error){
		// dispatch a failure action to the store with the error
		yield put({ type: "CHANNEL_NEWS_API_CALL_FAILURE", error });
	}	
}


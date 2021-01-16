import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/action-types';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherABNNewsSaga() {
  yield takeLatest("ABN_NEWS_API_CALL_REQUEST", workerABNNewsSaga);
}

// function that makes the api request and returns a Promise for response
function fetchABNNews(category) {
	console.log( " ABN_NEWS_API_CALL_REQUEST IN SAGA ", category)	
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	const url = proxyurl+'https://www.abplive.com'+category.payload;
	console.log(url)
	return axios({
		method: "get",
		url: url
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerABNNewsSaga(category){
	try {
		const response = yield call(fetchABNNews, category);
		console.log(response);
		const xml = new XMLParser().parseFromString(response.data);
		const newsdata = xml.children[0].children;
		const news = [];
   
		newsdata.forEach((element) => {				
			if(element.children.length > 0){
				news.push(element.children)
			}
		})			
		// dispatch a success action to the store with the new dog
		yield put({ type: "ABN_NEWS_API_CALL_SUCCESS", news });
	}
	catch(error){
		yield put({ type: "ABN_NEWS_API_CALL_FAILURE", error });
	}	
}


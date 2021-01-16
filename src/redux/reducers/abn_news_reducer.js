import * as types from '../actions/action-types';
const initialState = {
  categoryURL : null,
  news : [],
  fetching : false,
  error: null,
  details : null
};
 

const abnnewsreducer = (state = initialState, action) =>  {
console.log(" abnnewsreducer " ,action);
    switch(action.type){
        case types.ABN_NEWS_API_CALL_REQUEST:
            return {...state , fetching: true, error: null, categoryURL : action.payload, details:null}
		case types.ABN_NEWS_API_CALL_SUCCESS:
            return {...state , fetching: false, news: action.news}
		case types.ABN_NEWS_API_CALL_FAILURE:
            return {...state , fetching: false, news: null, error: action.error}
		case types.ABN_NEWS_DETAILS:
			return {...state , details: action.payload}
        default:
        return state
    }
}
export default abnnewsreducer;

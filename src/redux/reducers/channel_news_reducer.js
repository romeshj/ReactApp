import * as types from '../actions/action-types';
// reducer with initial state
const initialState = {
  channelString : null,
  posts : [],
  fetching : false,
  error: null
};
 

const channelnewsreducer = (state = initialState, action) =>  {
console.log(" channelnewsreducer " ,action);
    switch(action.type){
        case types.SELECT_CHANNEL_NEWS:
            return {...state , channelString : action.payload}		
		case types.CHANNEL_NEWS_API_CALL_REQUEST:
            return {...state , fetching: true, error: null, channelString : action.payload}
		case types.CHANNEL_NEWS_API_CALL_SUCCESS:
            return {...state , fetching: false, posts: action.posts}
		case types.CHANNEL_NEWS_API_CALL_FAILURE:
            return {...state , fetching: false, posts: null, error: action.error}			
        default:
        return state
    }
}
export default channelnewsreducer;

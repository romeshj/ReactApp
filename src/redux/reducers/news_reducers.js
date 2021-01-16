import * as types from '../actions/action-types';

const INITIAL_STATE = {
    loading : false,
    articles : []
}

const newsreducer = (state = INITIAL_STATE, action) =>  {

    switch(action.type){

        case types.LOADING_NEWS:
        return {
            ...state , loading : true
        }
        case types.FETCH_NEWS:
            return {
                    ...state , articles : action.payload, loading : false
            }
        default:
        return state
    }
}
export default newsreducer;

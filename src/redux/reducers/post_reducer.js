import * as types from '../actions/action-types';

const INITIAL_STATE = {
    posts :[]
}

const postreducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type){
        case types.LOAD_POSTS_DATA:
            return {
                    ...state , posts : action.payload
            }
        default:
        return state
    }
}

export default postreducer;

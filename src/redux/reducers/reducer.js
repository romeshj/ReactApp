import * as types from '../actions/action-types';
const INITIAL_STATE = {
    currentTime : new Date().toString()
}
const currenttimereducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type){
        case types.FETCH_NEW_TIME:
            return {
                ...state,  currentTime : action.payload
            }
        default:
        return state
    }
}
export default currenttimereducer;

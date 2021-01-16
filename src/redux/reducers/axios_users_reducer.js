import * as types from '../actions/action-types';

const INITIAL_STATE = {
    users :[]
}

 

const usersreducer = (state = INITIAL_STATE, action) =>  {  

    switch(action.type){
        case types.GET_USERS_DATA:
            return {
                    ...state , users : action.payload
            }

            case types.GET_USER_DATA:
            return {
                    ...state , user : action.payload
            }
			
			case types.UPDATE_USER:
			return {
                    ...state , usr : action.payload
            }
			
			case types.ADD_NEW_USER:
			return {
                    ...state , newusr : action.payload
			} 

        default:
        return state
    }

} 

export default usersreducer;

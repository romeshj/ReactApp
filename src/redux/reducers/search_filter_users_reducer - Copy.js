import * as types from '../actions/action-types';

const INITIAL_STATE = {
    allusers :[],
	appliedFilters : []
}

const searchfilterreducer = (state = INITIAL_STATE, action) =>  {  

    switch(action.type){
        case types.LOAD_ALL_USERS:
            return {
                    ...state , allusers : action.payload
            }
		case types.FILTER_BY_VALUE:
		    //clone the state
			let newState = Object.assign({}, state);
			let value = action.payload
			console.log(value)
			let filterUsers = state.allusers.filter(user => {
				return user.name.toLowerCase().includes(value) || user.city.toLowerCase().includes(value)
			})
			console.log(filterUsers)
						
			let appliedFilters = state.appliedFilters;
			if(value){
				let index = appliedFilters.indexOf(types.FILTER_BY_VALUE);
				if (index===-1){
					appliedFilters.push(types.FILTER_BY_VALUE);
					console.log(appliedFilters)
					newState.allusers = filterUsers
				}
			}
			else{
				let index = appliedFilters.indexOf(types.FILTER_BY_VALUE);
				appliedFilters.splice(index, 1);
				console.log(appliedFilters)
				if (appliedFilters.length === 0) {
					//if there are no filters applied, reset the products to normal.
					newState.filterUsers = newState.allusers;
				}
			}
			
			
			return newState
		
        default:
        return state
    }

} 

export default searchfilterreducer;

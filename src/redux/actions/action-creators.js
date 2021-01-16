import * as types from './action-types';
import axios from 'axios';

export const fetchNewTime = () => ({
    type : types.FETCH_NEW_TIME,
    payload : new Date().toString()
})

export const fetchPostsData = (data) => ({
    type : types.LOAD_POSTS_DATA,
    payload : data
})

export const loadPostsData = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            dispatch(fetchPostsData(json))
        })
    }
}

export const getDogsData = () => ({
	type : types.API_CALL_REQUEST
})

export const submitForm = (data) => ({
	type : types.FORM_SUBMIT,
	payload :  data
})

export const getOlympicWinners = () => ({
	type : types.OLYMPIC_API_CALL_REQUEST
})


export const selectChannelNews = (data) => ({
	type : types.SELECT_CHANNEL_NEWS,
	payload : data
})

export const getChannelNews = (channelString) => ({
	type : types.CHANNEL_NEWS_API_CALL_REQUEST,
	payload : channelString
})

export const getUsersData = (usersdata) => ({
    type : types.GET_USERS_DATA,
    payload : usersdata
})

export const loadUsersData = () => {
    return (dispatch, getState) =>{
        if(getState().usersreducer.users.length == 0){
            axios.get('./users.json')
            .then(({data: users}) => {
                    dispatch(getUsersData(users))
            })
        }
    }
}

export const getUserData = (userdata) => ({
    type : types.GET_USER_DATA,
    payload : userdata
})

export const updateUser = (usr) => ({
    type : types.UPDATE_USER,
    payload : usr
})

export const updateUserField =(usr) => {
    console.log(" updateUserField " ,  usr)	
	return (dispatch) =>{	
	 axios.get("../../users.json")
        .then(({ data: users }) => {		  
          let user =  users.filter(u => u.id.toString() === usr.id.toString())
		  console.log(user[0].id , usr.id)
		  
		  if(user[0].id == usr.id){
				dispatch(updateUser(usr))
		  }
        });
    }
}

export const addNewUserField = (newusr) => ({
    type : types.ADD_NEW_USER,
    payload : newusr
})


export const loadingNews = () => ({
    type : types.LOADING_NEWS
})

export const fetchNews = (newsdata) => ({
    type : types.FETCH_NEWS,
    payload : newsdata
}) 

export const newsRecieved = () => {
    return (dispatch) => {
        fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response =>  response.json())
        .then(json => {
            dispatch(loadingNews());
            setTimeout(function(){dispatch(fetchNews(json.articles))}, 1000)
        })
    }
}

export const loadPieChart = (options) => ({
    type : types.PIE_CHART,
    payload : options
})


export const getABNNews = (categoryURL) => ({
	type : types.ABN_NEWS_API_CALL_REQUEST,
	payload : categoryURL
})

export const showABNNewsDetails = (news) => ({
	type : types.ABN_NEWS_DETAILS,
	payload : news
})


export const getAllUsers = (allusers) => ({
    type : types.LOAD_ALL_USERS,
    payload : allusers
})

export const loadAllUsers = () => {
    return (dispatch) =>{
        axios.get('./users.json')
		.then(({data: users}) => {
				dispatch(getAllUsers(users))
		})
    }
}

export const filterByValue = (value) => ({
	type : types.FILTER_BY_VALUE,
    payload : value
})

export const filterUsers = (users, value) => ({
	type : types.FILTER_USERS,
    payload : {
		users : users,
		value : value
	}
})

export const filterOlympics = (value) => ({
	type : types.SEARCH_OLYMPICS,
    payload : value
})

export const getChartOptions = (options) => ({
	type : types.CHART_OPTIONS,
    payload : options
})

export const showPane = (show) => ({
	type : types.SHOW_PANE,
    payload : show
})

export const showRowDetails = (row) => ({
	type : types.SHOW_ROW_DETAILS,
    payload : row
})






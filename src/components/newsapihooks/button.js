import React, { useReducer, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {newsRecieved} from '../../redux/actions/action-creators';

const Button = () => {
		const dispatch = useDispatch();
         return(
            <div><button onClick={() => dispatch(newsRecieved())}>GET NEWS</button></div>
        )
}
export default Button
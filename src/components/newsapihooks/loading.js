import React, { useReducer, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import img from '../../images/loading.gif';
const Spinner = () => {
	const loading = useSelector(state => state.newsreducer.loading);
    console.log(loading)
    if (loading) {
        return(
            <div style={{ textAlign: 'center' }}>
             <img src={img} alt='loading' />
             <h1>LOADING</h1>
             </div>
         )
      }
      else {
          return null
      }
}
export default Spinner
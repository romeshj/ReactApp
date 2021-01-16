import React, {useState, useEffect} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import '../../css/abnnews.css';

const NewsDetails = (props) => {
	const {location : {state}} = props;
	console.log(state)
   return( 
	<div className="details">
		<div className="container">
     
      <div className="card">
        <h1 className="h1">{state[0]}</h1>
        <img className="card-img-top" src={state[3]} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{state[0]}</h4>
          <div className="card-text">{state[2]}</div>		  
		  <a href={state[1]} class="card-link" target="_blank">Read More</a>
        </div>

        <div className="card-footer">
          <small className="text-muted">{state[4]}</small>
        </div>
      </div>
    </div>
    </div>
   )
}
export default withRouter(NewsDetails)

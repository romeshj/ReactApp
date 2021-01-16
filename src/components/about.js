import React from 'react';
import {withRouter} from 'react-router-dom';
const About = (props) => {
    const {history, location} = props;
	
    const goToHomePage = () => {
        history.push("/");
    }
	
   return( 
	<div>
        <h3>ABOUT PAGE</h3>
        <br />
        <p>You are at {location.pathname}</p>
        <br/>
        <button onClick={goToHomePage}>Go to Home Page</button>
    </div>
   )
}
export default withRouter(About)

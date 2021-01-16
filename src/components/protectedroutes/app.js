import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import auth from './auth';
const Demo = (props) => {
	console.log(auth.isAuthenticated)
	const [authenticated ,setAuthenticated] = useState(auth.isAuthenticated)

	const goToPage = () => {
		auth.login(() => {
			//props.history.push('/protectedroutes/applayout')
			setAuthenticated(auth.isAuthenticated)
		});
    }
	
	const logout = () => {
		auth.logout(() => {
			setAuthenticated(auth.isAuthenticated)
		});
	}
	
   return(
	<div>
		<Link to="/protectedroutes/landingpage">Landing Page</Link> <br />
		<Link to="/protectedroutes/applayout">Layout Page</Link> <br />
		{console.log(authenticated)}
		{authenticated ? <button onClick={logout}>Logout</button>: <button onClick={goToPage}>Login</button>}
    </div>
   )
}
export default Demo

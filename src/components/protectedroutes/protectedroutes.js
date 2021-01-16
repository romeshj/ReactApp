import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';
console.log(auth.isAuthenticated)
const ProtectedRoutes = ({component : Component, ...rest}) => (
	<Route {...rest} render={(props) => (
		auth.isAuthenticated ? <Component {...props} /> : 
		<Redirect to={		
			{
				pathname : "/protectedroutes",
				state : {
					from : props.location
				}				
			}
		
		} />
	)} />
)

export default ProtectedRoutes
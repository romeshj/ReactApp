import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import UsersData from './users-data';
import Tab from './tab';

const User = ({match}) => {
    const { params : { userName} } = match;
	const user = UsersData.find(({name}) => name == userName);
   return( 
	<div>
	
	<Router>
	{console.log(match)}
	    <p>{user.description}</p>
		{
			user.tabs.map(({name}, index) => (
				<li key={index}>
					<Link to={`${match.url}/${name}`}>{name}</Link>
				</li>
			))
		}
		<hr/>
		<Route path={`${match.path}/:tabName`} component={Tab}/>
	 </Router>
    </div>
   )
}
export default withRouter(User)

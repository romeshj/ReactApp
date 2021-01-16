import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import UsersData from './users-data';
import User from './user';

const Users = ({match}) => {    
   return( 
	<div>
	<Router>
        <h3>NESTED ROUTING EXAMPLE</h3>
		{console.log(match)}
		{console.log(UsersData)}
		<ul>
			{
				UsersData.map(({name}, index) => (
						<li key={index}>
							<Link to={`${match.url}/${name}`}>{name}</Link>
						</li>
				))
			}
		</ul>
		<hr/>
		<Route path={`${match.path}/:userName`} component={User}/>
	 </Router>
    </div>
   )
}
export default withRouter(Users)

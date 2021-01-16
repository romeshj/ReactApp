import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import Home from './home';
import Topics from './topics/topics';
import Users from './users/users';

const Outer = (props) => {
    
   return( 
	<div>		
       <Router>
		   <ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/topics">Topics</Link></li>
				<li><Link to="/users">Users</Link></li>
		   </ul>
		   <hr />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/topics" component={Topics}/>
				<Route exact path="/users" component={Users}/>
			</Switch>
		</Router>		
    </div>
   )
}
export default Outer

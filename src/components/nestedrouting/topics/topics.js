import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import topicsData from './topic-data';
import Topic from './topic';

const Topics = ({match}) => {    
   return( 
	<div>
	<Router>
        <h3>NESTED ROUTING EXAMPLE</h3>
		{console.log(match)}
		<ul>
			{
				topicsData.map(({name, id}) => (
						<li key={id}>
							<Link to={`${match.url}/${id}`}>{name}</Link>
						</li>
				))
			}
		</ul>
		<hr/>
		<Route path={`${match.path}/:topicId`} component={Topic}/>
	 </Router>
    </div>
   )
}
export default withRouter(Topics)

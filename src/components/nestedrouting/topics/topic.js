import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import topicsData from './topic-data';
import Resource from './resource';
const Topic = ({match}) => {
    const { params : { topicId} } = match;
	const topic = topicsData.find(({id}) => id == topicId);
   return( 
	<div>
	
	<Router>
	{console.log(match)}
	    <p>{topic.description}</p>
		{
			topic.resources.map(({name, id}) => (
					<li key={id}>
						<Link to={`${match.url}/${id}`}>{name}</Link>
					</li>
			))
		}
		<hr/>
		<Route path={`${match.path}/:resourceId`} component={Resource}/>
	 </Router>
    </div>
   )
}
export default withRouter(Topic)

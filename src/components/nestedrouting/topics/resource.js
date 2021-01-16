import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import topicsData from './topic-data';
const Resource = ({match}) => {

    const { params : { topicId, resourceId } } = match;
	const topic = topicsData.find(({id}) => id == topicId);
	const resource = topic.resources.find(({id}) => id == resourceId);
   return( 
	<div>
	{console.log(match)}
	<p>{resource.description}</p>
    </div>
   )
}
export default withRouter(Resource)

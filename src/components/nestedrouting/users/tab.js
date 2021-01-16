import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import UsersData from './users-data';
const Tab = ({match}) => {

    const { params : { userName, tabName } } = match;
	const user = UsersData.find(({name}) => name == userName)
	const tab = user.tabs.find(({name}) => name == tabName);
   return( 
	<div>
	{console.log(match)}
	 Tab Name: <strong>{tab.name}</strong>
      <h6>Tab content: </h6>
		{
		Object.keys(tab.content).map((c, index) => (
			<p key={index}>{c} - {tab.content[c]}</p>
		))
	}
    </div>
   )
}
export default withRouter(Tab)

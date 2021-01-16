import React, { Component } from 'react';
import Projects from './projects';

class Employees extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			client: ''			
		};
	}
	
	setAlice = () => {
		this.setState({ client: 'Alice' });
	};

	setJohn = () => {
		this.setState({ client: 'John' });
	};
	
	render() {
	    const {client} = this.state;
		console.log(" Parent Component " , client)
		return (
		  <div>
			<button onClick={this.setAlice}>Alice</button>
			<button onClick={this.setJohn}>John</button>
			<Projects client={client} />
		  </div>
		);
	  }
}

export default Employees
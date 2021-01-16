import React, { Component } from 'react';

class Projects extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			projectsname: [] 
		};
		this.fetchData = this.fetchData.bind(this)
	}
	
	fetchData(){
		const {client} = this.props;
		const p = client === 'Alice' ? ['Project Alice', 'Project Alice'] : ['Project John', 'Project John'];			
		this.setState({
				projectsname: p
		})
	}
	
	shouldComponentUpdate(nextProps, nextState){
		const {projectsname} = this.state;
		const { client } = this.props;
		if(nextProps.client != client || nextState.projectsname != projectsname){
			return true;
		}
		return false; 
	}
	
	componentDidUpdate(prevProps, prevState){
		if(prevProps.client !== this.props.client){
			this.fetchData();
		}
	}
	
	
	render() {
	    const {projectsname} = this.state;
		const { client } = this.props;
		console.log(projectsname)
		return (
		  <div>
			<b>Projects for {client}</b>
			<ul>
			  {projectsname.map((project, index) => (
				<li key={index}>{project}</li>
			  ))}
			</ul>
		  </div>
		);
	  }
}

export default Projects
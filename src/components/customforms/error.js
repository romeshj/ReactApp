import React, {Component} from 'react';
class Error extends Component{
	constructor(props){
		super(props)
		console.log("constructor props ", props)
	}
	render(){
	   return( 
		<div>
			<p>{this.props.errorMessage}</p>
		</div>
	   )
	}
}
export default Error
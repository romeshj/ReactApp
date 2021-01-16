import React, {Component} from 'react';
import { UserConsumer } from './UserContext'
class Button extends Component{
	constructor(props){	
		super(props);
		console.log(props)
	}
	
	render() {    
	   return( 
			<UserConsumer>
				{(props) => {
					console.log(props)
				return (<button onClick={props.updateUser}>UPDATE</button>)
				
				}} 
			</UserConsumer>
	   )
   }
}
export default Button
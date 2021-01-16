import React, {Component} from 'react';
import { UserConsumer } from './UserContext'

class HomePage extends Component{
	constructor(props){	
		super(props);
	}
	
	render() {    
	   return( 
			<UserConsumer>
				{(props) => {
					
				return <div>{props.name}, {props.loggedIn}</div>
				
				}} 
			</UserConsumer>
	   )
   }
}
export default HomePage
import React, {Component} from 'react';
import { UserConsumer } from './UserContext'

class HomePageB extends Component{
	constructor(props){	
		super(props);
		console.log(props)
	}
	
	render() {    
	   return( 
			<UserConsumer>
				{({user}) => {
				return (<><div>{user.name}</div></>)				
				}} 
			</UserConsumer>
	   )
   }
}
export default HomePageB
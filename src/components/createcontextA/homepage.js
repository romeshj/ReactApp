import React, {Component} from 'react';
import { UserConsumer } from './UserContext'
import Button from './button';
import HomePageB from './homepageB';

class HomePageA extends Component{
	constructor(props){	
		super(props);
		console.log(props)
	}
	
	render() {    
	   return( 
			<UserConsumer>
				{({user}) => {
				return (<><div>{user.name}</div> <Button /> <HomePageB /></>)				
				}} 
			</UserConsumer>
	   )
   }
}
export default HomePageA
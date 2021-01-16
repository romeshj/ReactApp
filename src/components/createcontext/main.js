import React, {Component} from 'react';
import { UserProvider } from './UserContext'
import HomePage from './homepage'

class MainApp extends Component{
	constructor(props){	
		super(props);
		this.state={
			user : {
			name: 'Tania', loggedIn: 'true'
			}
		}

		this.setUser = 	this.setUser.bind(this);	
	}
	
	setUser(){
		this.setState({
			user : { name: 'Joe', loggedIn: 'false' }
		})
	}
	   
   render() {
       const {user} = this.state;
	   
	   console.log(user)
	   return( 
		<UserProvider value={user}>
			<HomePage />
			<button onClick={this.setUser}> Update User </button>
		</UserProvider>
	   )
   }
}
export default MainApp
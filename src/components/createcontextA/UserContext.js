import React , { Component } from 'react'

const UserContextA = React.createContext()

export class UserProvider extends Component {
	
	state = {
		user: {name : 'ABC'}
	};
    
	updateUser = () => {
		this.setState({
			user: {name : 'XYZ'}
		});		
	}
	
	render() {
	    const {user} = this.state;
		return <UserContextA.Provider value={{ user : user, updateUser : this.updateUser}}>{this.props.children}</UserContextA.Provider>;
	}
}

export const UserConsumer = UserContextA.Consumer

export default UserContextA
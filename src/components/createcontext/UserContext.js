import React , { Component } from 'react'

const UserContext = React.createContext()

export const UserProvider = UserContext.Provider

export const UserConsumer = UserContext.Consumer

export default UserContext

/* 

class UserProvider extends Component {
	constructor(props){	
		super(props);
		
		this.state = {
			user: {}
		}
	}
	
	setUser = (newUser) => {
		this.setState({
			user : newUser
		})
	}
	
	render() {
		const { children } = this.props
		const { user } = this.state
		const { setUser } = this
		
		return (
			<UserContext.Provider
				value={{
				  user,
				  setUser,
				}}
			  >
				{children}
			</UserContext.Provider>
		)
	}
	
	
}

export {UserProvider}

*/
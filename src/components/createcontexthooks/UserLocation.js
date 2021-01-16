import React, {useContext} from 'react';
import { UsrContext } from './UserContext';

const UserLocation = () => {
	const user = useContext(UsrContext);
	
	console.log(user);
	
	return (
		<p>{user.city}</p>
	)
}

export default UserLocation


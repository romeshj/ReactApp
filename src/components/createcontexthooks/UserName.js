import React, {useContext} from 'react';
import { UsrContext } from './UserContext';

const UserName = () => {
	const user = useContext(UsrContext);
	
	console.log(user);
	
	return (
		<p>{user.name}</p>
	)
}

export default UserName


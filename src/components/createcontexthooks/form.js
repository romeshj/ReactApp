import React, {useContext, useState} from 'react';
import { UsrContext } from './UserContext';

const Form = () => {
    
	const user = useContext(UsrContext);
	const fields = {
			name : '',
			city : ''
	}
	
	const [userData, setUserData] = useState(fields)
	
	const handleInputChange = (e) => {
		fields[e.target.name] = e.target.value
		setUserData(fields);		
	}
	
	const updateUser = () => {
		user.setName(userData['name']);
		user.setCity(userData['city']);
	}
	return (
	<>
			<div>
				<label className="label">Update Name: </label>
				<input className="input" name="name" onChange={(e) => handleInputChange(e)} />
			</div>
			
			<div>
				<label className="label">Update Location: </label>
				<input className="input" name="city" onChange={(e) => handleInputChange(e)} />
			</div>
			<div><button onClick={() => { updateUser() }}>UPDATE</button></div>
	</>
	)
}

export default Form;
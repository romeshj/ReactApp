import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'
import List from './userlists';
const MainLists = (props) => {
	
	const initialUsers = [
		{ id: 'a', name: 'Robin' },
		{ id: 'b', name: 'Dennis' }
	]
	
	const [users, setUsers] = useState(initialUsers);
	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
   
    const handleChange = (e) => {
		const newUser = e.target.value;
		setName(newUser)
		
	}
	
	const handleAddUser = () => {
		const newUserA = [{
			id : uuidv4(), name : name
		}]
		
		const newUserList = [...users, ...newUserA]
		console.log(newUserList)
		setUsers(newUserList)
		
	}
	
	const handleRemove = useCallback((id) => {
		const z = users.filter(user => user.id != id )
		setUsers(z)
	}, [users]);
	
   return( 
	<div>
		{console.log("MainLists")}
        <h3>Main Lists (useCallback)</h3>
		<div>
			<input type="text" value={name} onChange={handleChange} />
			<button type="button" onClick={handleAddUser}>Add User</button>
		</div>
		{users && users.length ? <List list={users} onRemove={handleRemove}/>  : <p>No Users</p>}
    </div>
   )
}
export default MainLists

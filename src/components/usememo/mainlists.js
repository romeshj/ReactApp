import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'
import List from './userlists';
const MainListsA = (props) => {
	
	const initialUsers = [
		{ id: 'a', name: 'Robin' },
		{ id: 'b', name: 'Dennis' },
		{ id: 'c', name: 'Robin' },
		{ id: 'd', name: 'Dennis' },
		{ id: 'e', name: 'Robin' },
		{ id: 'f', name: 'Dennis' }
	]
	
	const [users, setUsers] = useState(initialUsers);
	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
   
    const handleChange = (e) => {
		const newUser = e.target.value;
		setName(newUser)
		
	}
	
	
	const handleSearch = () => {
		setSearch(name)
	}
	
  const filteredUsers = React.useMemo(() => 
		users.filter(user => {
			console.log('Filter function is running ...');
			return user.name.toLowerCase() == search.toLowerCase()
		}),
		[search]	
	)
   return( 
	<div>
        <h3>Main Lists (useMemo)</h3>
		<div>
			<input type="text" value={name} onChange={handleChange} />
			<button type="button" onClick={handleSearch}>Search</button>
		</div>
		{filteredUsers && filteredUsers.length ? <List list={filteredUsers} />  : <p>No Users</p>}
    </div>
   )
}
export default MainListsA

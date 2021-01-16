import React, {useState, useEffect} from 'react';
import AuthorLists from './xml2';
import axios from 'axios';

const Authors = (props) => {
	

	const [authors, setAuthors] = useState(null);
	
	useEffect(()=>{
		axios.get("https://fakerestapi.azurewebsites.net/api/Authors", {
		
		}).then(response => {
			console.log(response.data)
			setAuthors(response.data)
		}).catch(error => {
			console.log(error);
		});
	},[])
	
   return( 
	<div>
        <h3>XML List of Authors</h3>
		<AuthorLists authors={authors} />
    </div>
   )
}
export default Authors

import React, { useState } from 'react';
import Child from './child';

const Parent = (props) => {
	
	const [message, setMessage] = useState('');
	console.log(message)
	const parentMessage = (msg) => {
		setMessage(msg)
	}

   return( 
   
	<div>
        <h3>Parent Page</h3>
        <br />
        <p>Message from Child : {message}</p>
		<br />
		<Child sendMessage={parentMessage}/>
    </div>
   )
}
export default Parent
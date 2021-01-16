import React from 'react';

const AuthorLists = ({authors}) => {
   return( 
	<div>
        {
			(authors && authors.length) && authors.map((item) => {
				return (
					<p>{item.FirstName} - {item.LastName}</p>
				)
			})
		}
    </div>
   )
}
export default AuthorLists

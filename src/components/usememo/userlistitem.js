import React from 'react';

const ListItem = React.memo(({item}) => {
	
   return(
		<>
		 {console.log("ITEM ID",  item.id)}
			<li key={item.id}>{item.name}</li>
		</>
   )
})
export default ListItem

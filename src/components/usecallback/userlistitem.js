import React from 'react';

const ListItem = React.memo(({item, onRemove}) => {
	const removeItem = (id) => {
	    console.log(item.id)
		onRemove(item.id)
	}
   return(
		<>
		 {console.log("ITEM ID",  item.id)}
			<li key={item.id}>{item.name} <button type='button' onClick={()=> removeItem(item.id)}>Remove</button></li>
		</>
   )
})
export default ListItem

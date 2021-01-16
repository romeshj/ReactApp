import React from 'react';
import ListItem from './userlistitem';
const List = React.memo(({list, filteredUsers, onRemove}) => {
	
   return(    
	<div>
	   {console.log("List")}
       <ul>
			{
				list && list.map(item => {
					return (
						<ListItem item={item} onRemove={onRemove} />
					)
				})
			}		
	   </ul>
    </div>
   )
})
export default List

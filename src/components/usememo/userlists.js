import React from 'react';
import ListItem from './userlistitem';
const List = React.memo(({list}) => {
	
   return(    
	<div>
	   {console.log("List")}
       <ul>
			{
				list && list.map(item => {
					return (
						<ListItem item={item} />
					)
				})
			}		
	   </ul>
    </div>
   )
})
export default List

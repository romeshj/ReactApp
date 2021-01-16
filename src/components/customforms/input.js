import React from 'react';
const Input = ({ value , onChangeHandler, ...rest }) => {
   console.log({...rest})
   return( 
	<div>
        <input type="text" value={value} onChange={onChangeHandler} {...rest} />
    </div>
   )
}
export default Input
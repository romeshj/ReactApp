import React from 'react';
const Button = ({ type , children, ...rest}) => {
   console.log({...rest})
   return( 
	<div>
        <button type={type}>{children}</button>
    </div>
   )
}
export default Button
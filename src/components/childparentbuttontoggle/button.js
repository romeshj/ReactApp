import React from 'react';


const Button = ({onClickHandler}) => {   
    
   return( 
	<div>
        <button type="button" onClick={() => onClickHandler()}> Toggle Show/Hide  </button>
    </div>
   )
}
export default Button
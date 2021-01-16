import React from 'react';

const childstyle = {
	width : '50%',
	border: 'solid 1px red'
}

const Child = (props) => {
   console.log(props)
  const { sendMessage } = props;
   
   return( 
	<div style={childstyle}>
        <h3>Child Page</h3>
        <br />
        <button type="button" onClick={()=> sendMessage('hello how u doing')}> Show Message in Parent </button>
    </div>
   )
}
export default Child
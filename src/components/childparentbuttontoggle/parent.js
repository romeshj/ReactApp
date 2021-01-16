import React, { useState } from 'react';
import Helloreact from './helloreact';
import Button from './button';

const ParentA = (props) => {
const hello = 'Say Hello to learning Props/State in React!';

const [display, setDisplay] = useState(true);
 const toggleShowHide = () => {	
     display ? setDisplay(false) : setDisplay(true)
	console.log( "  === display === " , display)
  }
   return( 
   
	<div>
        <h3>Parent Page !</h3>
        {display ? <Helloreact hello={hello}/> : null}
		<br />
		<Button onClickHandler={() => toggleShowHide()}/>
    </div>
   )
}
export default ParentA
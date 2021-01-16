import React from 'react';
import BasicSelect from './basicselect';

const SelectA = (props) => {
	let dsval =''
    const handleDSChange = (val) => {
        dsval=val;
	}
   return( 
	<div>
        <BasicSelect name="dwnsftcountry" dwnshftcountryvalue={handleDSChange} />​
    </div>
   )
}
export default SelectA

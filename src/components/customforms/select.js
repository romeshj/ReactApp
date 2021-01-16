import React from 'react';
const Select = ({ value , options, onChangeHandler, ...rest }) => {
   console.log(options)
   return( 
	<div>
        <select value={value} onChange={onChangeHandler} {...rest}>
			{
				options.map((o ,index) => (
					<option value={o.value} key={index}>{o.text}</option>
				))
				
			}
		</select>
    </div>
   )
}
export default Select
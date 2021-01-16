import React, { Component } from 'react';

class PersonName extends Component{
    constructor(props){
        super(props);
		this.state = {
			fields : {
				fname : '',
				//lname : ''
			},
			isDisabled : true
		}
		
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}
	
	alphaNumericSpaceHyphenUnderscore(inpVal){
		return inpVal.replace(/[^a-zA-Z0-9-_ ]/g, '');
	}
	
	onChangeHandler(e){
		const {fields} = this.state;		
		const inputValue = e.target.value;
		const validValue = inputValue === ' ' ? inputValue.trim() : this.alphaNumericSpaceHyphenUnderscore(inputValue);
		const isValueEmpty = validValue ? false : true;
		fields[e.target.name] = validValue;
		this.setState({
			fields,
			isDisabled : isValueEmpty
		})
	}
	
	render(){
		const {fields, isDisabled} = this.state;
		return (
			<div>
			
			<h3>REGEX</h3>
			<input type='text' name='fname' value={fields.fname || ''} onChange={(e) => this.onChangeHandler(e)} /> <br/>
				{ /*<input type='text' name='lname' value={fields.lname || ''} onChange={(e) => this.onChangeHandler(e)} /> <br/> */}
			<button type='button' disabled={isDisabled}>SUBMIT</button>
			</div>
		)
	}
}
export default PersonName

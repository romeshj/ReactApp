import React, {Component} from 'react';
import Input from './input';
import Label from './label';
import Button from './button';
import Error from './error';


let isFormValid = false;
class CustomForm extends Component {
	
  constructor(props){
	  super(props);
	  
	  this.state = {
		  firstName : '',
		  lastName : '',
		  fields : {
			  firstName : '',
			  lastName : ''
		  },
		  errors : {
			  firstName : '',
			  lastName : ''
		  },
		  validValueErrors : {
			  firstName : '',
			  lastName : ''
		  },
		  
		  errorMessage:'',
		  formatErrorMessage :''
	  }
	  this.handleFNameChange = this.handleFNameChange.bind(this);
	  this.handleLNameChange = this.handleLNameChange.bind(this);
	  this.submitForm = this.submitForm.bind(this);
  }
  	
   handleFNameChange(event){
        this.setState({
            firstName : event.target.value
        });
   }
   
   handleLNameChange(event){
        this.setState({
            lastName : event.target.value
        });
   }
   
   
    submitForm(e){
	   e.preventDefault();
	   const isValidSuccess = this.validateForm();
	   console.log( " isValidSuccess " , isValidSuccess)
	   if(isValidSuccess){
		    const {fields} = this.state;
			console.log( " submitted form === ", fields)
	   }
	   
	   
   }
   
   validateForm(){	
	 const {fields,firstName,lastName, errorMessage, errors, formatErrorMessage, validValueErrors} = this.state; 
	 fields['firstName'] = firstName;
	 fields['lastName'] = lastName;
	 console.log(this.state)
	 
	 if(fields['firstName'] =='') { 
		errors['firstName'] = 'First Name is Required'
	 }
	 if(fields['firstName'] !== ''){
			
			if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                validValueErrors['firstName'] = 'Please enter alphabet characters only.'
            }
	 }
	 else {
		 
	 }
	 if(fields['lastName'] =='') { errors['lastName'] = 'Last Name is Required';}
	 
	
	 this.setState({
		fields,
		errors,
		validValueErrors		
	 });
	 
	 console.log("firstName", firstName, "fields", fields, "fields['firstName']", fields['firstName'], errors, validValueErrors, 'validateForm()')
	 console.log(" validateForm() " , fields['firstName'])
	 
	 if(fields['firstName'] != '' && fields['lastName'] !==''){
		 
		 isFormValid = true;		 
	 }
	 return isFormValid;  
   }
   render(){
	    const {fields, firstName,lastName, errors, validValueErrors, isEmpty} = this.state;
	   return( 
	   
		<div>		
		{console.log(fields, " fields ")}
		
			<form method="post" onSubmit={this.submitForm}>
				<div>
					<Label>First Name</Label>
					<Input value={firstName} onChangeHandler={(event) => this.handleFNameChange(event)} name='firstName'  />
					{ fields['firstName'] ==  ''  ? <Error fieldValue={fields['firstName']} errorMessage={errors['firstName']}/>: null}
					{ isEmpty ==  false   ? <Error fieldValue={fields['firstName']} formatErrorMessage={validValueErrors['firstName']}/> : null}
				</div>
				<div>
					<Label>Last Name</Label>
					<Input value={lastName} onChangeHandler={(event) => this.handleLNameChange(event)} name='lastName'  />
						{ fields['lastName'] ==  ''   ? <Error fieldValue={fields['lastName']} errorMessage={errors['lastName']}/> : null}
						
				</div>
				<div>
					<Button type='submit'>Custom Submit</Button>
				</div>
			</form>
		</div>
	   )
   }
}
export default CustomForm
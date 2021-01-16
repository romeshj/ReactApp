import React, {Component} from 'react';
import Input from './input';
import Label from './label';
import Select from './select';
import Button from './button';
import Error from './error';


let isValidSuccess = false;
class CustomForm extends Component {
	
  constructor(props){
	  super(props);
	  
	  this.state = {
		  fields : {
			  firstName : '',
			  lastName : '',
			  email : '',
			  city : ''
		  },
		  errors : {}
	  }
	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.submitForm = this.submitForm.bind(this);
	  
	  
  }
  	
   handleInputChange(e){
	   const {fields} = this.state;	   
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
   }
     
   
    submitForm(e){
	   e.preventDefault();
	   isValidSuccess = this.validateForm();
       if(isValidSuccess){        
		    const {fields} = this.state;
			console.log( " submitted form === ", fields)
			fields["firstName"] = "";
			fields["lastName"] = "";
			fields["email"] = "";
	    }   
   }
   
   validateForm(){  
	let {fields} = this.state;
    let errors = {};
	let isFormValid = true;
	
	if(fields['firstName']== ''){
            isFormValid = false;
            errors["firstName"] = "First Name is required.";
    }
	if (typeof fields["firstName"] !== "undefined" && fields['firstName'] !== '') {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                isFormValid = false;
                errors["firstName"] = "Please enter alphabet characters only.";            
			}
    }
	
	if(fields['lastName']== ''){
            isFormValid = false;
            errors["lastName"] = "Last Name is required.";
    }
	if (typeof fields["lastName"] !== "undefined" && fields['lastName'] !== '') {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
                isFormValid = false;
                errors["lastName"] = "Please enter alphabet characters only.";            
			}
    }
	
	if(fields['email']== ''){
            isFormValid = false;
            errors["email"] = "Email is required.";
    }
	if (typeof fields["email"] !== "undefined" && fields['email'] !== '') {
		    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			
            if (!pattern.test(fields["email"])) {
                isFormValid = false;
                errors["email"] = "Please enter valid email-ID.";            
			}
    }
	
	if(fields['city']== ''){
            isFormValid = false;
            errors["city"] = "City is required.";
    }
	
	this.setState({
		errors: errors
    });

    return isFormValid;
}
   
   render(){
	    const {fields,errors} = this.state;
		 const cityOptions = [
			{value:'', text : 'Select'},
			{value:'Mumbai', text : 'MUMBAI'},
			{value:'Thane', text : 'THANE'}
		  ]
	   return( 
	   
		<div>		
		{console.log(cityOptions, " cityOptions ")}
		
			<form method="post" onSubmit={this.submitForm}>
				<div>
					<Label>First Name</Label>
					<Input value={fields['firstName']} onChangeHandler={(event) => this.handleInputChange(event)} name='firstName'  />
					<Error errorMessage={errors['firstName']} />
				</div>
				<div>
					<Label>Last Name</Label>
					<Input value={fields['lastName']} onChangeHandler={(event) => this.handleInputChange(event)} name='lastName'  />
					<Error errorMessage={errors['lastName']}/>
				</div>
				<div>
					<Label>Email</Label>
					<Input value={fields['email']} onChangeHandler={(event) => this.handleInputChange(event)} name='email'  />
					<Error errorMessage={errors['email']}/>
				</div>
				<div>
					<Label>City</Label>
					<Select value={fields['city']} options={cityOptions} onChangeHandler={(event) => this.handleInputChange(event)} name='city'  />
					<Error errorMessage={errors['city']}/>
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
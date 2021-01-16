import React, {Component}  from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
let isValidSuccess = false;

class Startdate extends Component{ 

    state={
        startDate : null,
        fields : {
            startdt : ''
        },
       errors : {},
       errorStyleClass : {}
	}
	
    handleDtPickerChange =  (date) => {
        const fields = this.state.fields;
        fields["startdt"] = date;
        this.setState({
          fields: fields,
          startDate: date
        });
    }

    submitForm = (e) =>{
        e.preventDefault();
        isValidSuccess = this.validateForm();
        if(isValidSuccess){
            const fields = this.state;
            console.log(fields)
            this.setState({fields:fields});
        }
     }

     validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let errorStyleClass = {};
        let isFormValid = true;   

        if(fields['startdt'] == ''){
            isFormValid = false;
            errors["startdt"] = "*Date is required.";
            errorStyleClass["startdt"] = "invalidForm";
        }

        this.setState({
            errors: errors,
            errorStyleClass : errorStyleClass
          });
          return isFormValid;
     }

    render(){

        const {startDate} = this.state;
        return (
            <div>
                <form method="post"  name="userForm" onSubmit= {this.submitForm}>
                <div className={this.state.errorStyleClass.startdt}>
                    <label>Start Date : </label>  
                    <DatePicker
                        className="react-datepicker-ignore-onclickoutside"
                        selected={startDate}
                        onChange={this.handleDtPickerChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select" />

                        <div className="errorMsg">{this.state.errors.startdt}</div>

                </div>
                <input type="submit" className="button"  value="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default Startdate;

import React , {Component} from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BasicSelect from './downshift/basicselect';
import '../css/form.css';


const statesoptions = [
  { value: 'California', label: 'California', cities:[
      {value:'SFO', label:'San Francisco'},
      {value:'LAX', label:'Los Angeles'}
  ]},

  { value: 'Florida', label: 'Florida' , cities:[
      {value:'MIA', label:'Miami'},
      {value:'ORL', label:'Orlando'}
  ]},

  { value: 'Texas', label: 'Texas' , cities:[
      {value:'AUS', label:'Austin'},
      {value:'DAL', label:'Dallas'}
  ]}
]

const citiesoptions = []; 

const widthStyle = {
        width : '200px'
}

let selectedStatesValue = '';
let selectedCityValue = '';
let selectedValue = [];
let isValidSuccess = false;
let dsval =''

class Userform extends Component{
    constructor(props){
        super(props)
		
        this.state = {
          selectedStateOption :null,
          selectedCityOption: null,
          citiesDisabled : true,
          startDate : null,
            fields : {
                username : '',
                emailid : '',
                mobileno : '',
                password : '',
                address : '',
                city : '',
                gender:'',
                hobbies:'',
                cstates : '',
                ccity:'',
                startdt : ''
            },
            errors : {},
            errorStyleClass : {}
        }
    }

 

    handleStatesChange = (selectedStateOption) => {

     this.setState({selectedStateOption})

     const cities = selectedStateOption.cities;   

     citiesoptions.length = 0;

     citiesoptions.push(cities);

 

     if(citiesoptions.length > 0){

         const fields = this.state.fields;

         selectedStatesValue  = selectedStateOption.value;

         fields["cstates"] = selectedStatesValue;

         this.setState({

             citiesDisabled :  false, 

             selectedCityOption: null,

             fields : fields

         })

     }

  }

  handleCitiesChange = (selectedCityOption) => {

     this.setState({selectedCityOption})

     const fields = this.state.fields;

     selectedCityValue  = selectedCityOption.value;

     fields["ccity"] = selectedCityValue;

 

     this.setState({

         fields : fields

     })

  }

 

  handleDtPickerChange =  (date) => {

       

    const fields = this.state.fields;

    fields["startdt"] = date;

   

    this.setState({

      fields: fields,

      startDate: date

    });

}

 

    handleChange = (e) => {

 

        let fields = this.state.fields;

        fields[e.target.name] = e.target.value;

        this.setState({

            fields

        });

       

    }

   

    handleCheck = (e) => {

      

        let fields = this.state.fields;

        if(e.target.checked){

            selectedValue.push(e.target.value);           

        }

        else {

            const index = selectedValue.indexOf(e.target.value);

            selectedValue.splice(index, 1);

        }

       

        fields["hobbies"] = selectedValue;

        this.setState({

            fields

        });

       

    }

 handleDSChange = (val) => {
        dsval=val;
}

    submitForm = (e) => {

        e.preventDefault();

        isValidSuccess = this.validateForm();

 

       if(isValidSuccess){

        const fields = this.state;

        //const selectedStateOption = this.state;

        //const selectedCityOption = this.state;

        console.log(fields)

 

         

          fields["username"] = "";

          fields["emailid"] = "";

          fields["mobileno"] = "";

          fields["password"] = "";

          fields["address"] = "";

          fields["city"] = "";

          fields["gender"] = "";

          fields["hobbies"] = "";

          fields["cstates"] = "";

          fields["ccity"] = "";

          fields["startdt"] = "";

         

          this.radioMale.checked = false;

          this.radioFemale.checked = false;

          this.chk1.checked = false;

          this.chk2.checked = false;

          selectedValue = [];

 

          this.setState({

            fields:fields,

            selectedStateOption : null,

            selectedCityOption : null,

            citiesDisabled :  true,

            startDate : null

          })

         

       }

    }

 

    validateForm = () => {

 

        let fields = this.state.fields;

        let errors = {};

        let errorStyleClass = {};

        let isFormValid = true;

 

        if(fields['username']== ''){

            

            isFormValid = false;

            errors["username"] = "*Username is required.";

            errorStyleClass["username"] = "invalidForm";

        }

 

        if (typeof fields["username"] !== "undefined" && fields['username'] !== '') {

            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {

                isFormValid = false;

              errors["username"] = "*Please enter alphabet characters only.";

              errorStyleClass["username"] = "invalidForm";

            }

          }

 

          if (fields["emailid"] == '') {

            isFormValid = false;

            errors["emailid"] = "*Email Id is required.";

            errorStyleClass["emailid"] = "invalidForm";

 

          }

   

          if (typeof fields["emailid"] !== "undefined" && fields["emailid"] !== '') {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(fields["emailid"])) {

                isFormValid = false;

              errors["emailid"] = "*Please enter valid email-ID.";

              errorStyleClass["emailid"] = "invalidForm";

            }

          }

   

          if (fields["mobileno"] == '') {

            isFormValid = false;

            errors["mobileno"] = "*Mobile number is required.";

            errorStyleClass["mobileno"] = "invalidForm";

          }

   

          if (typeof fields["mobileno"] !== "undefined" && fields["mobileno"] !== '') {

            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {

                isFormValid = false;

              errors["mobileno"] = "*Please enter valid mobile no.";

              errorStyleClass["mobileno"] = "invalidForm";

            }

          }

   

          if (fields["password"] == '') {

            isFormValid = false;

            errors["password"] = "*Password is required.";

            errorStyleClass["password"] = "invalidForm";

          }

 

          if (fields["address"] == '') {

            isFormValid = false;

            errors["address"] = "*Address is required.";

            errorStyleClass["address"] = "invalidForm";

          }

 

          if (fields["city"] == '') {

            isFormValid = false;

            errors["city"] = "*City is required.";

            errorStyleClass["city"] = "invalidForm";

          }

 

          if (fields["gender"] == '') {

            isFormValid = false;

            errors["gender"] = "*Gender is required.";

            errorStyleClass["gender"] = "invalidForm";

          }

 

 

          if(typeof fields["hobbies"] == "undefined" || fields["hobbies"].length == 0){

            isFormValid = false;

            errors["hobby"] = "*Hobby is required.";

            errorStyleClass["hobby"] = "invalidForm";

          }

 

          if(fields['cstates'] == ''){           

            isFormValid = false;

            errors["cstates"] = "*State is required.";

            errorStyleClass["cstates"] = "invalidForm";

          }

 

          let citiesDisabled = this.state.citiesDisabled;

          if(citiesDisabled == false){

 

              if(fields['ccity'] == ''){           

                  isFormValid = false;

                  errors["ccity"] = "*City is required.";

                  errorStyleClass["ccity"] = "invalidForm";

              }

 

          }

 

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

 

    const {selectedStateOption, selectedCityOption, citiesDisabled, startDate} = this.state;

 

      return(

 

        <div id="main-registration-container">

            <div id="register">

                <h3>Registration page</h3>

                <form method="post"  name="userForm" onSubmit= {this.submitForm}>

                  

                    <div className={this.state.errorStyleClass.username}>

                        <label>Name</label>

                        <input type="text" name="username"   value={this.state.fields.username || ''} onChange={this.handleChange}/>

                        <div className="errorMsg">{this.state.errors.username}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.emailid}>

                        <label>Email ID:</label>

                        <input type="text" name="emailid"  value={this.state.fields.emailid || ''} onChange={this.handleChange}/>

                        <div className="errorMsg">{this.state.errors.emailid}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.mobileno}>

                        <label>Mobile No:</label>

                        <input type="text" name="mobileno"  value={this.state.fields.mobileno || ''} onChange={this.handleChange} />

                        <div className="errorMsg">{this.state.errors.mobileno}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.password}>

                        <label>Password</label>

                        <input type="password" name="password"  value={this.state.fields.password || ''} onChange={this.handleChange} />

                        <div className="errorMsg">{this.state.errors.password}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.address}>

                        <label>Address</label>

                        <textarea rows="10" name="address" value={this.state.fields.address || ''} onChange={this.handleChange}></textarea>

                        <div className="errorMsg">{this.state.errors.address}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.city}>

                        <label>City</label>

                        <select name="city" value={this.state.fields.city || ''} onChange={this.handleChange}>

                            <option value=""></option>

                            <option value="MUMBAI">MUMBAI</option>

                            <option value="THANE">THANE</option>

                        </select>

                        <div className="errorMsg">{this.state.errors.city}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.gender}>

                        <label>Gender</label>

                        <input type="radio" name="gender"  value='Male' onChange={this.handleChange} ref={input => this.radioMale = input}/> Male

                        <input type="radio" name="gender"  value='Female' onChange={this.handleChange} ref={input => this.radioFemale =input}/> Female

                        <div className="errorMsg">{this.state.errors.gender}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.hobby}>

                        <label>Hobby</label>

                        <input type="checkbox" name="hobby"  value='Tennis' onChange={this.handleCheck} ref={input => this.chk1 = input}/> Tennis

                        <input type="checkbox" name="hobby"  value='Cricket' onChange={this.handleCheck} ref={input => this.chk2 = input}/> Cricket

                        <div className="errorMsg">{this.state.errors.hobby}</div>

                    </div>

 

                    <div style={widthStyle}>

 

                    <div className={this.state.errorStyleClass.cstates}>

                        <label>State : </label>

                        <Select

                            name="USStates"

                            options={statesoptions}

                            value = {selectedStateOption}

                            onChange = {this.handleStatesChange}

                        />

                        <div className="errorMsg">{this.state.errors.cstates}</div>

                    </div>

 

                    <div className={this.state.errorStyleClass.ccity}>

                        <label>City : </label>

                        <Select

                            name="USCities"

                            options={citiesoptions[0]}

                           value={selectedCityOption}

                            onChange={this.handleCitiesChange}

                            isDisabled={citiesDisabled}

                        />

                        <div className="errorMsg">{this.state.errors.ccity}</div>

                    </div>

 

                    </div>

 

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

                   <div>​
                      <BasicSelect name="dwnsftcountry" dwnshftcountryvalue={this.handleDSChange} />​
                    </div>​

                    <input type="submit" className="button"  value="Register"/>

                   

                    <div>{isValidSuccess ? <p className="sucessMsg">Success - Form is Valid</p> : null}</div>

                </form>

            </div>

</div>

 

      )

 

  }

 

}

 

export default Userform;

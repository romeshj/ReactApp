
import React, {Component} from 'react';

import Select from 'react-select';

import '../css/form.css';

let isValidSuccess = false;

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

    ]},

]

 

const citiesoptions = [];

 

const widthStyle = {

        width : '200px'

}

 

let selectedStatesValue = '';

let selectedCityValue = '';

 

class Stateslists extends Component{

constructor(props){

    super(props);

    this.state ={

        selectedStateOption :null,

        selectedCityOption: null,

        citiesDisabled : true,

  

       fields : {

           cstates : '',

           ccity:''

       },

       errors : {},

       errorStyleClass : {}

    }

}

 

handleStatesChange = (selectedStateOption) => {

     //console.log(selectedStateOption)

    this.setState({selectedStateOption})

    const cities = selectedStateOption.cities;   

    citiesoptions.length = 0;

    citiesoptions.push(cities);

   

    //console.log("fields" , fields)

    //console.log(citiesoptions.length)

    if(citiesoptions.length > 0){

        const fields = this.state.fields;

        selectedStatesValue  = selectedStateOption.value;

       // console.log(" cities == " , selectedStateOption.value, selectedValue)

        fields["cstates"] = selectedStatesValue;

      //  console.log("111" , fields["cstates"], selectedValue)

        this.setState({

            citiesDisabled :  false, 

            selectedCityOption: null,

            fields : fields

        })

       // console.log(this.state)

    }

 

}

 

handleCitiesChange = (selectedCityOption) => {

    //console.log(selectedCityOption)

    this.setState({selectedCityOption})

    const fields = this.state.fields;

    selectedCityValue  = selectedCityOption.value;

    fields["ccity"] = selectedCityValue;

    this.setState({

        fields : fields

    })

    //console.log(this.state)

}

 

submitForm = (e) =>{

 

    e.preventDefault();

    isValidSuccess = this.validateForm();

    //console.log(this.validateForm())

    if(isValidSuccess){

        const fields = this.state;

        //console.log("hi")

       

        console.log(fields)

        this.setState({fields:fields});

    }

}

 validateForm = () => {

 

    let fields = this.state.fields;

    let errors = {};

    let errorStyleClass = {};

    let isFormValid = true;

    //console.log(fields)

 

    if(fields['cstates'] == ''){           

        isFormValid = false;

        errors["cstates"] = "*State is required.";

        errorStyleClass["cstates"] = "invalidForm";

    }

 

 

    let citiesDisabled = this.state.citiesDisabled;

    //console.log("citiesDisabled" , citiesDisabled)

        if(citiesDisabled == false){

            if(fields['ccity'] == ''){           

                isFormValid = false;

                errors["ccity"] = "*City is required.";

                errorStyleClass["ccity"] = "invalidForm";

            }

        }

   

 

   

 

    this.setState({

        errors: errors,

        errorStyleClass : errorStyleClass

      });

      return isFormValid;

}

 

    render(){

        const {selectedStateOption, selectedCityOption, citiesDisabled} = this.state;

        return(

        <div style={widthStyle}>

            <form method="post"  name="userForm" onSubmit= {this.submitForm}>

            <div className={this.state.errorStyleClass.cstates}>

                <label>State : </label>

                <Select

                    options={statesoptions}

                    value = {selectedStateOption}

                    onChange = {this.handleStatesChange}

                />

                <div className="errorMsg">{this.state.errors.cstates}</div>

            </div>

 

            <div className={this.state.errorStyleClass.ccity}>

                <label>City : </label>

                <Select

                    options={citiesoptions[0]}

                    value={selectedCityOption}

                    onChange={this.handleCitiesChange}

                    isDisabled={citiesDisabled}

                />

                <div className="errorMsg">{this.state.errors.ccity}</div>

            </div>

            <input type="submit" className="button"  value="SUBMIT"/>

            </form>

        </div>

        )

    }

 

}

 

export default Stateslists
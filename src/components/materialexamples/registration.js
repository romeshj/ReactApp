
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem';

import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';

import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormLabel from '@material-ui/core/FormLabel';

import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

 

 

 

const useStyles = makeStyles(theme => ({

    root: {

      '& .MuiTextField-root': {

        margin: theme.spacing(1),

        width: 200,

      },

    },

    formControl: {

        margin: theme.spacing(1),

        minWidth: 120,

      },

      selectEmpty: {

        marginTop: theme.spacing(2),

      }

  }));

 

 

//let isValidSuccess = false;

const RegistrationForm = (props) => {

 

    const classes = useStyles();

 

    const [fields, setFields] = useState({

        username:'',

        emailid:'',

        mobileno:'',

        password:'',

        address:'',

        city:'',

        gender:'',

        dob:''

 

    });

 

    const [cities, setCities] = useState('');

    const [gender, setGender] = useState('');

    const [selectedDate, setSelectedDate] = useState(null);

 

    const [errors, setErrors] = useState({})

    const [errorUsername, setErrorUsername] = useState({});

    const [errorEmailid, setErrorEmailid] = useState({});

    const [errorMobile, setErrorMobile] = useState({});

    const [errorPassword, setErrorPassword] = useState({});

    const [errorAddress, setErrorAddress] = useState({});

    const [errorCity, setErrorCity] = useState({});

    const [errorGender, setErrorGender] = useState({});

    const [errorDOB, setErrorDOB] = useState({});

   

    const handleChange = (e) => {

        setFields({...fields, [e.target.id] : e.target.value});

       // console.log(fields)

      

  }

 

  const handleSelectChange = (e) => {

    setCities(e.target.value)

    fields["city"] = e.target.value

    setFields({...fields});

    //console.log(fields)

  }

 

  const handleRadioChange = (e) => {

    setGender(e.target.value)

    fields["gender"] = e.target.value

    setFields({...fields});

    console.log(fields)

  }

 

  const handleDateChange = (date) => {

    setSelectedDate(date);

    fields["dob"] = date;

    setFields({...fields});

  };

 

const validateForm = () => {

   

    let isFormValid = true;

    //console.log(typeof fields['username'])

   

    if(typeof fields["username"] !== "undefined"){

        if(fields['username']== ''){

            isFormValid = false;

            errors["username"] = "*Username is required.";

            errorUsername["username"] = true;

            setErrorUsername({...errorUsername})

        }

        else

        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {

            console.log('11')

            isFormValid = false;

            errors["username"] = "*Please enter alphabet characters only.";

            errorUsername["username"] = true;

            setErrorUsername({...errorUsername})

        }

        else {

            errors["username"] = "";

            errorUsername["username"] = false;

            setErrorUsername({...errorUsername})

        }

 

    }

    

    if(typeof fields["emailid"] !== "undefined"){

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (fields["emailid"] == '') {

            isFormValid = false;

            errors["emailid"] = "*Email Id is required.";

            errorEmailid["emailid"] = true;

            setErrorEmailid({...errorEmailid})

        }

        else

        if (!pattern.test(fields["emailid"])) {

            isFormValid = false;

            errors["emailid"] = "*Please enter valid email-ID.";

            errorEmailid["emailid"] = true;

            setErrorEmailid({...errorEmailid})

        }

        else{

            errors["emailid"] = "";

            errorEmailid["emailid"] = false;

            setErrorEmailid({...errorEmailid})

        }

 

    }

 

    if(typeof fields["mobileno"] !== "undefined"){

        if(fields['mobileno']== ''){

            isFormValid = false;

            errors["mobileno"] = "*Mobile No is required.";

            errorMobile["mobileno"] = true;

            setErrorMobile({...errorMobile})

        }

        else if (!fields["mobileno"].match(/^[0-9]{10}$/)) {

            isFormValid = false;

            errors["mobileno"] = "*Please enter valid mobile no.";

            errorMobile["mobileno"] = true;

            setErrorMobile({...errorMobile})

        }

        else {

            errors["mobileno"] = "";

            errorMobile["mobileno"] = false;

            setErrorMobile({...errorMobile})

        }

 

    }

 

    if(typeof fields["password"] !== "undefined"){

        if(fields['password']== ''){

            isFormValid = false;

            errors["password"] = "*Password is required.";

            errorPassword["password"] = true;

            setErrorPassword({...errorPassword})

        }

        else {

            errors["password"] = "";

            errorPassword["password"] = false;

            setErrorPassword({...errorPassword})

        }

 

    }

 

    if(typeof fields["address"] !== "undefined"){

        if(fields['address']== ''){

            isFormValid = false;

            errors["address"] = "*Address is required.";

            errorAddress["address"] = true;

            setErrorAddress({...errorAddress})

        }

        else {

            errors["address"] = "";

            errorAddress["address"] = false;

            setErrorAddress({...errorAddress})

        }

 

   }

 

    if(typeof fields["city"] !== "undefined"){

        if(fields['city']== ''){

            isFormValid = false;

            errors["city"] = "*City is required.";

            errorCity["city"] = true;

            setErrorCity({...errorCity})

        }

        else {

            errors["city"] = "";

            errorCity["city"] = false;

            setErrorCity({...errorCity})

        }

 

    }

 

    if(typeof fields["gender"] !== "undefined"){

        if(fields['gender']== ''){

            isFormValid = false;

            errors["gender"] = "*Gender is required.";

            errorGender["gender"] = true;

            setErrorGender({...errorGender})

        }

        else {

            errors["gender"] = "";

            errorGender["gender"] = false;

            setErrorGender({...errorGender})

        }

 

    }

 

    if(typeof fields["dob"] !== "undefined"){

        if(fields['dob']== ''){

            isFormValid = false;

            errors["dob"] = "*Date is required.";

            errorDOB["dob"] = true;

            setErrorDOB({...errorDOB})

        }

        else {

            errors["dob"] = "";

            errorDOB["dob"] = false;

            setErrorDOB({...errorDOB})

        }

 

    }

   

 

    setErrors({...errors});

    return isFormValid;

 

}

 

    const submitForm = (e) => {

        e.preventDefault();

 

        //isValidSuccess = validateForm();

        //console.log("isValidSuccess " , isValidSuccess)

        if(validateForm()){       

            console.log(fields);

            setFields({...fields});

            setErrors({

                errors: {

                    username : '',

                    emailid: '',

                    mobileno:'',

                    password:'',

                    address:'',

                    city:'',

                    gender:'',

                    dob:''

                }

            });

           

            errorUsername["username"] = false;

            setErrorUsername({...errorUsername});

 

            errorEmailid["emailid"] = false;

            setErrorEmailid({...errorEmailid})

 

            errorMobile["mobileno"] = false;

            setErrorMobile({...errorMobile})

 

            errorPassword["password"] = false;

            setErrorPassword({...errorPassword})

 

            errorAddress["address"] = false;

            setErrorAddress({...errorAddress})

 

            errorCity["city"] = false;

           setErrorCity({...errorCity})

 

            errorGender["gender"] = false;

            setErrorGender({...errorGender})

 

            errorDOB["dob"] = false;

            setErrorDOB({...errorDOB})

 

        }

       

      }

 

    return (

       

        <div style={{margin : "20px"}}>

           

            

            <form className={classes.root} noValidate autoComplete="off" method="post"  name="userForm" onSubmit = {submitForm}>

 

                <div>

                    <label>First Name</label>

                    <TextField label={errorUsername.username === true ? "Error" : ""}  error={errorUsername.username === true} required id="username" value={fields.username || ''} helperText={errors.username} onChange={handleChange} />

                </div>

 

                <div>

                    <label>Email ID</label>

                    <TextField label={errorEmailid.emailid === true ? "Error" : ""} error={errorEmailid.emailid === true} required id="emailid" value={fields.emailid || ''} helperText={errors.emailid} onChange={handleChange} />

                </div>

 

                <div>

                    <label>Phone</label>

                    <TextField label={errorMobile.mobileno === true ? "Error" : ""} error={errorMobile.mobileno === true} required id="mobileno" value={fields.mobileno || ''} helperText={errors.mobileno} onChange={handleChange} />

                </div>

 

                 <div>

                    <label>Password</label>

                    <TextField label={errorPassword.password === true ? "Error" : ""} error={errorPassword.password === true} required id="password" type="password" value={fields.password || ''} autoComplete="current-password" helperText={errors.password} onChange={handleChange} />

                </div>

 

                <div>

                    <label>Address</label>

                    <TextField multiline rows="4" required id="address" label={errorAddress.address === true ? "Error" : ""} error={errorAddress.address === true} value={fields.address || ''} helperText={errors.address} onChange={handleChange} />

                </div>

 

                <div>

                <label>City {fields.city}</label>

                <FormControl className={classes.formControl} error={errorCity.city === true}>

                    <InputLabel id="select-city-error-label">{errorCity.city === true ? "Error *" : ""}</InputLabel>

                    <Select

                    labelId="select-city-error-label"

                    id="city"

                    value={cities}

                    onChange={handleSelectChange}

                    renderValue={value => `${value}`}

                    name="city">

                    <MenuItem value="">

                        <em>Select</em>

                    </MenuItem>

                    <MenuItem value={'Mumbai'}>Mumbai</MenuItem>

                    <MenuItem value={'Thane'}>Thane</MenuItem>

                    <MenuItem value={'Pune'}>Pune</MenuItem>

                    </Select>

                    <FormHelperText>{errors.city}</FormHelperText>

                </FormControl>

                </div>

 

                <div>

                <label>Gender</label>

                <FormControl component="fieldset" className={classes.formControl} error={errorGender.gender === true}>

                    <FormLabel component="legend">{errorGender.gender === true ? "Error *" : ""}</FormLabel>

                    <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleRadioChange}>

                    <FormControlLabel

                        value="female"

                        control={<Radio color="primary" />}

                        label="Female"

                        labelPlacement="start"

                    />

                    <FormControlLabel

                        value="male"

                        control={<Radio color="primary" />}

                        label="Male"

                        labelPlacement="start"

                    />

                    </RadioGroup>

                    <FormHelperText>{errors.gender}</FormHelperText>

                </FormControl>

                </div>

 

                <div>

                    <label>DOB</label>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <KeyboardDatePicker

                            variant="inline"

                            format="MM/dd/yyyy"

                            margin="normal"

                            placeholder="Date of Birth"

                            value={selectedDate}

                            helperText={errors.dob}

                            onChange={date => handleDateChange(date)}

                            label={errorDOB.dob === true ? "Error *" : ""}

                            error={errorDOB.dob === true}

                            id="dob"

                        />

                    </MuiPickersUtilsProvider>

                </div>   

                

                <div>

                    <Button variant="contained" color="primary" type="submit">SUBMIT</Button>

                </div>

 

            </form>

        </div>

    )

 

 

}

 

export default RegistrationForm
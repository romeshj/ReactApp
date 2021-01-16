import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import UIDGenerator from 'uid-generator';
import {addNewUserField} from '../../redux/actions/action-creators';
class Addnewuser extends Component{
    constructor(props){
        super(props)
        this.state = {
		  fields :{
			name:'',
			email:'',
			phone:'',
			address:'',
			city:'',
			zip:''			
		  }
        }
    }

    handleChange = (e) => {
		let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

	addNewUserData = (e) => {
	    e.preventDefault();		
		const uidgen = new UIDGenerator();
		const newuser = this.state.fields;	
		uidgen.generate()
		  .then(uid => {
			console.log(uid)			
			newuser['id'] = uid;
			console.log(newuser)	
			this.props.addNewUserField(newuser);
		  });
		  
		
		
	}

    render(){

        return(

            <form method="post" onSubmit={this.addNewUserData}>
                Name : <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} /><br />
				Email : <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} /><br />
				Phone : <input type="text" name="phone" value={this.state.fields.phone} onChange={this.handleChange} /><br />
				Address : <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} /><br />
				City : <input type="text" name="city" value={this.state.fields.city} onChange={this.handleChange} /><br />
				Zip : <input type="text" name="zip" value={this.state.fields.zip} onChange={this.handleChange} /><br />
				<input type="submit" value="ADD" />

            </form>

        )

    }

 

}

 

const mapStateToProps = (state) => {
    return {
     user: state.usersreducer.user
     }
}

 const mapDispatchToProps = (dispatch) => {
    return {
        addNewUserField : (newusr) => dispatch(addNewUserField(newusr))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Addnewuser))

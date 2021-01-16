import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserField} from '../../redux/actions/action-creators';

class Userfield extends Component{
    constructor(props){
        super(props)
        this.state = {
            ...props.user,
            name:this.props.user.name?this.props.user.name:''
        }
    }

    handleChange = (e) => {
        this.setState({name:e.target.value})
    }

	submitUpdateForm = (e) => {
		const usr = this.state;		
		console.log(" here ", usr)
		this.props.updateUserField(usr);	
		
	}

    render(){

        return(

            <form method="post" >
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
				<input type="button" value="UPDATE" onClick={this.submitUpdateForm}/>
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
        updateUserField : (usr) => dispatch(updateUserField(usr))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Userfield))

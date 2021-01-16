import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserData} from '../../redux/actions/action-creators';
import axios from 'axios';
class UserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            user : []
        }
    }

 

    componentDidMount(){
        const {match} = this.props;  

        axios.get("../../users.json")
        .then(({ data: users }) => {
          let user =  users.filter(u => u.id.toString() === match.params.userId.toString())
            this.setState({
               user : user[0]
            })     

        });
    }
 

    editUser =() =>{
        this.props.getUserData(this.state.user);
        this.props.history.push("/userfield");
    }

 

    render(){ 

        const {history} = this.props;
        const goToHomePage = () => {
            history.push("/");
        }

 

        return( <div>
            <h3>USER DETAILS</h3>
            <br />
            <p><strong>NAME : </strong> {this.state.user.name}</p>
            <p><strong>EMAIL : </strong> {this.state.user.email}</p>
            <p><strong>PHONE : </strong> {this.state.user.phone}</p>
            <p><strong>ADDRESS : </strong> {this.state.user.address}</p>
            <p><strong>CITY : </strong> {this.state.user.city}</p>
            <p><strong>ZIP : </strong> {this.state.user.zip}</p>
            <p><button onClick={this.editUser}>EDIT</button></p>
            <br/>
            <button onClick={goToHomePage}>Go to Home Page</button>
        </div>

       )

    }
}


const MyInfo = withRouter(UserInfo); 

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData : (userdata) => dispatch(getUserData(userdata))
    }
}

export default connect(null,mapDispatchToProps)(MyInfo)


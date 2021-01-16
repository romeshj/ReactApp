import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadUsersData} from '../../redux/actions/action-creators'; 

class Users extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
       this.props.loadUsers();
    }

    render(){       

        const {users} = this.props
        return (
            <div>
                <h3>AXIOS DATA USING REDUX</h3>
                <table width="100%" border="1">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADDRESS</th>
                            <th>CITY</th>
                            <th>ZIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>{
                                return(
                                    <tr key={user.id}>
                                        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>{user.city}</td>
                                        <td>{user.zip}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <p><Link to="/">Go to Home Page</Link> | <Link to="/addnewuser">ADD NEW USER</Link></p>        
            </div>
        )
    }

}


const mapStateToProps = (state) => {
   return {
    users: state.usersreducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    loadUsers : () => dispatch(loadUsersData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)


import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadAllUsers, filterByValue} from '../../redux/actions/action-creators'; 

class AllUsers extends Component {
    constructor(props){
        super(props);
		this.filterByInput = this.filterByInput.bind(this);
		this.state = {
			users : []
		}
    }
	
    componentDidMount(){
       this.props.loadAllUsers();
    }
	
	filterByInput(e){
		const value = e.target.value;
		const {allusers} = this.props;
		console.log(value)		
		const filterUsers = allusers.filter(user => {
			return user.name.toLowerCase().includes(value) || user.city.toLowerCase().includes(value)
		})
		console.log(filterUsers)
		this.setState({
			users : filterUsers
		})
		
		
	}

    render(){
        const {allusers} = this.props;
		const {users} = this.state;
		const u = users && users.length ? users : allusers;
        return (
            <div>
                <div style={{width: "300px"}}>
                  Search By Name or City :  <input  style={{width: "100%"}} placeholder='Filter by' type='text' onChange={(e) => this.filterByInput(e)} />
                </div>
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
                            u.map(user =>{
                                return(
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
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
            </div>
        )
    }

}


const mapStateToProps = (state) => {
   return {
		allusers: state.searchfilterreducer.allusers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		loadAllUsers : () => dispatch(loadAllUsers()),
		filterByValue : (val) => dispatch(filterByValue(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)


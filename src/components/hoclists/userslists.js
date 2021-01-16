import React, {Component} from 'react';
import Tablerow from './tablerow';

class Userlists extends Component{
    constructor(props){
        super(props);
        this.state = {
            usersobject : props.data
        }
    }

    componentDidMount(){
		const { data } = this.props;	
        data.map((user, i) => {
            this.setState({
                usersobject : user
            })
         })
    }

    render(){
	 const { usersobject } = this.state;
        return (
            <div>
                <table border="1" width="50%">
                <thead>
                    <tr>
                    <td>ID</td>
                    <td>Name</td>
					</tr>
                </thead>
                <tbody>
                    <Tablerow objectdata = {usersobject} />
                </tbody>
                </table>
            </div>
        )
    }
}

export default Userlists

import React, {Component} from 'react';
import Tablerow from './tablerow'; 

class Stocklists extends Component{

    constructor(props){
		super(props);
        this.state = {
            stocksobject : props.data
        }
    }

 

    componentDidMount(){
        const { data } = this.props;
		
		data.map((stock, i) => {
            this.setState({
                stocksobject : stock
            })
         })
    }
    render(){
	    const { stocksobject } = this.state;
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
                    <Tablerow objectdata = {stocksobject} />
                </tbody>
                </table>
            </div>
        )
    }
}

export default Stocklists

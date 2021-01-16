import React, {Component} from 'react';
import hoc from './hoc';

class CompA extends Component{
    constructor(props){
        super(props);
        console.log(props);
	}
	
    render(){
        return (
            <div>
                {this.props.dataA}
            </div>
		)
    }
}

 

export default hoc(CompA)
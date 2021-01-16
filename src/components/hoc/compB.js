import React, {Component} from 'react';
import hoc from './hoc';

class CompB extends Component{
    constructor(props){
        super(props);
		console.log(props);
    }
    render(){
        return (
            <div>
                {this.props.dataB}
            </div>
        )
    }
}

export default hoc(CompB)

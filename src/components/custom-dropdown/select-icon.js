import React, { Component } from 'react';
import '../../css/font-awesome.min.css'
import '../../css/select.css'
import '../../css/select1.css'
import FontAwesome from 'react-fontawesome'


class CustomSelect extends Component{
    constructor(props){
        super(props);
	}
	
    render(){
        return (
		<>
            <div className='selectdiv' style={{ margin: '10px' }}>
			  <label>
				  <select className='fa'>
					  <option>Select Box</option> 
					  <option>&#xf0c0 Option 1</option>
					  <option>&#xf0c0 Option 2</option>
					  <option>&#xf0c0 Last long option</option>
				  </select>				  
				</label> 
			</div>
			<br/><hr/><br/>
			 <div>
				<ul>
				  <li><i className='fa fa-users'></i> Select Box</li>
				  <li><i className='fa fa-users'></i> option 1</li>
				</ul>
			</div>
			<br/><hr/><br/>
			<div className='input-group select-drpdwn' style={{'width': '300px'}}>
				<select className='form-control border-primary'>
					   <option>&#xf0c0 Select Box</option>
					  <option>&#xf0c0 Option 1</option>
					  <option>&#xf0c0 Option 2</option>
					  <option>&#xf0c0 Last long option</option>
				  </select>
			</div>
			<br/><hr/><br/>
			<div className='input-group select-drpdwn' style={{'width': '500px'}}>
				<select className='form-control border-primary'>
					  <option>&#xf0c0 Select Box</option>
					  <option>&#xf0c0 Option 1</option>
					  <option>&#xf0c0 Option 2</option>
					  <option>&#xf0c0 Last long option</option>
				  </select>
			</div>
			  
		</>
		)
    }
}
export default CustomSelect
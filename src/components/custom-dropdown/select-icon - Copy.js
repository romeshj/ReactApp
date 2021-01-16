import React, { Component } from 'react';
import '../../css/font-awesome.min.css'
import '../../css/select.css'
import FontAwesome from 'react-fontawesome'
import Select from 'react-select';
const statesoptions = [
    { value: 'California', label: 'California'},
    { value: 'Florida', label: 'Florida'},
    { value: 'Texas', label: 'Texas'},
]
const widthStyle = {
        width : '300px'
}
let selectedStatesValue = '';

class CustomSelect extends Component{
    constructor(props){
        super(props);
		this.state = {
			selectedStateOption : null
		}
	}
	
	handleStatesChange = (selectedStateOption) => {
		this.setState({selectedStateOption})
	}
	
	
    render(){
		const {selectedStateOption} = this.state;
		const customStyles = {
  container : (provided, state) => ({
    ...provided,
    border: '1px solid red',
    width: 300,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue'
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
  }),
  indicatorsContainer : () => ({
    
    width: 40,
    position: 'absolute',
    right: 0,
    top: 16,
    background: 'url(../../images/loading.gif) no-repeat',
    backgroundSize: '20px 20px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
        return (
		<>
            <div className="selectdiv" style={{ margin: '10px' }}>
			  <label>
				  <select className="fa">
					  <option>Select Box</option> 
					  <option>&#xf0c0 Option 1</option>
					  <option>&#xf0c0 Option 2</option>
					  <option>&#xf0c0 Last long option</option>
				  </select>				  
				</label> 
			</div>
			 <div>
					<ul>
					  <li><i className='fa fa-users'></i> Select Box</li>
					  <li><i className='fa fa-users'></i> option 1</li>
					</ul>
					</div>
					<div style={widthStyle}>
						<label>State : </label>
						<Select
						    styles={customStyles}
							options={statesoptions}
							value = {selectedStateOption}
							onChange = {this.handleStatesChange}
						/>
					</div>
			  
		</>
		)
    }
}
export default CustomSelect
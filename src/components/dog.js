import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {getDogsData} from '../redux/actions/action-creators';
import '../App.css';
import loading from '../images/loading.gif';

class Dog extends Component {
	constructor(props){
		super(props);
		console.log( " ====== DOGS " , props);
	}
	  render() {
	  const { fetching, dog, onRequestDog, error } = this.props;
			return(
			<div className="container">				
				<header>
				<h3>Dogs</h3>
				<Link to="/">Home</Link>				
				</header>				
				{fetching ? <img src={loading} /> : dog ? <img src={dog} /> : null }	
				{
					dog ? <p className="App-intro">Keep clicking for new dogs</p> : <p className="App-intro">Replace the React icon with a dog!</p>
				}

				{ fetching ? <button disabled>Fetching...</button> : <button onClick={onRequestDog}>Request a Dog</button> }

				{error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
			
			</div>
			)
		}
}

const mapStateToProps = state => {
console.log(state, " state ");
  return {
  fetching: state.dogreducer.fetching,
  dog: state.dogreducer.dog,
  error: state.dogreducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
   onRequestDog: () => dispatch(getDogsData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dog))


import React from 'react';
import { connect } from "react-redux";
import '../../css/abnnews.css';

const NewsDetails = ({details}) => {
	console.log(details)
   return( 
	<div>
		{	details && details.length ? 
			<div className="details container">     
			  <div className="card">
				<h1 className="h1">{details[0].value}</h1>
				<img className="card-img-top" src={details[9].attributes.url} alt="Card " />
				<div className="card-body">
				  <h4 className="card-title">{details[0].value}</h4>
				  <div className="card-text">{details[7].value}</div>		  
				  <a href={details[1].value} className="card-link" target="_blank">Read More</a>
				</div>

				<div className="card-footer">
				  <small className="text-muted">{details[3].value}</small>
				</div>
			  </div>
			</div> : null 
		}
    </div>
   )
}

const mapStateToProps = state => {
  return {
	details: state.abnnewsreducer.details
  }
};
export default connect(mapStateToProps, null)(NewsDetails)

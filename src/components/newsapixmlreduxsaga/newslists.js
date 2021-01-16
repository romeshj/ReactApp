import React, {useState} from 'react';
import { connect } from "react-redux";
import {Route, withRouter, Link} from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import {showABNNewsDetails} from '../../redux/actions/action-creators';
import '../../css/abnnews.css';

const ABNNewsLists = ({news, fetching, onShowABNNewsDetails}) => {
    console.log("============ ABNNewsLists ============ ",  news, fetching)
   	const posts = news.map((p, index) => (
		<div className="card" key={index} onClick={()=> onShowABNNewsDetails(p)}>
			<div className="cardhorizontal">
			  <div className="img-square-wrapper">
				<img className="" src={p[9].attributes.url} alt="Card  cap" />
			  </div>

			  <div className="card-body">
				<h4 className="card-title">{p[0].value}</h4>

				<div className="card-text">
				  {p[7].value}
				</div>
				<a href={p[1].value} className="card-link" target="_blank">Read More</a>
			  </div>
			</div>
			<div className="card-footer">
			  <small className="text-muted">
				{(p[3].value)}
			  </small>
			</div>
		</div>
	))
	
	let rendered;
	if (fetching) {
		rendered = <h2>Loading...</h2>;
	}
	if (!fetching && posts.length > 0) {
		rendered = <div>{posts}</div>;
	}
	
   return( 
	<div>
        {rendered}
    </div>
   )
}


const mapStateToProps = state => {
console.log(state , " ABNNewsLists ")
  return {
	news: state.abnnewsreducer.news,
	fetching : state.abnnewsreducer.fetching
  }
};

const mapDispatchToProps = dispatch => {
  return {
   onShowABNNewsDetails: (news) => dispatch(showABNNewsDetails(news))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ABNNewsLists)

import React from 'react';
import { connect } from "react-redux";
import Category from './category';
import ABNNewsLists from './newslists';
import NewsDetails from './newsdetails';
const MainDashboard = ({details}) => {
console.log("MainDashboard " , details)	
   return( 
	<div>
        <Category />		
		{
			details && details.length ? <NewsDetails /> : <ABNNewsLists />
		}
    </div>
   )
}

const mapStateToProps = state => {
  return {
	details: state.abnnewsreducer.details
  }
};
export default connect(mapStateToProps, null)(MainDashboard)

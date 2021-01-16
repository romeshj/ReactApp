import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { fetchNewTime } from '../redux/actions/action-creators'; 

const Home = (props) => {
    const {location} = props;
    return(
    <div>		
        <h3>HOME PAGE</h3>
        <p>You are at {location.pathname}</p>
        <p>Current Time is {props.myCurrentTime}</p>
        <button onClick={props.updateTime}>UPDATE TIME</button>
        <br />
        <br/>
        <Link to="/about">Go to About Page</Link> | <Link to="/childparent">Child to Parent</Link> | <Link to="/childparentbuttontoggle">Show hide in parent from child </Link><br /> 
		<Link to="/posts">Load Posts Data using Redux</Link> | <Link to="/news">Show News using Redux</Link><br />
		<Link to="/userform">Form Validation Example</Link> <br />
		<Link to="/compa">HOC COMPA Example</Link> | <Link to="/compb">HOC COMPB Example</Link> <br />
		<Link to="/hocmainlists">HOC Stocks and Users Lists Example</Link> <br/>
		<Link to ="/statescities">React-Select Example (States, Cities)</Link> | <Link to ="/rdtpicker">React-Datepicker</Link> | <Link to ="/downshiftone">Downshift - Basic Select</Link>​<br />
		<Link to ="/materialui">Material UI</Link> <br/>
		<Link to ="/postshooks">Fetch Data using Redux Hook (useSelector, useDispatch)</Link> | <Link to="/newshooks">Show News using Redux Hooks (useSelector, useDispatch)</Link>​<br />
		<Link to="/dog">Dog App Saga</Link> | <Link to="/olympicwinners">Olympic Winners Saga</Link> | <Link to="/olympicwinnershooks">Olympic Winners Hooks With Saga</Link> | 
		<Link to="/olympicwinnersusereducers">Olympic Winners Hooks useReducer with Saga</Link><br />
		<Link to="/form">Simple Redux Example (Button Click)</Link> <br />
		<Link to="/nestedrouting">Nested Routing</Link> <br />
		<Link to="/channelnews">Redux Async Actions (Channel News)</Link><br />
		<Link to="/users">Router Params Example using Axios</Link> <br />
		<Link to="/context">React Context Provider Consumer Example 1</Link> <br />
		<Link to="/contexta">React Context Provider Consumer Example 2</Link> <br />
		<Link to="/contexthooks">React Context Provider Consumer Using useContext Hooks</Link> <br />
		<Link to="/protectedroutes">Protected Routes</Link> <br />
		<Link to="/authors">Render XML data from server</Link> | <Link to="/newsapixml">Render XML data from News Api</Link><br />
		<Link to="/usecallback">UseCallback Example</Link> <br />
		<Link to="/usememo">UseMemo Example</Link> <br />
		<Link to="/abnnewsxml">ABN Live News XML Saga</Link> <br />
		<Link to="/shouldcomponentupdate">shouldcomponentupdate componentdidupdate</Link> <br />
		<Link to="/links">Links</Link> <br />
		<Link to="/customforms">Custom Form</Link> <br />
		<Link to="/searchfilter">Search Filter Users In Reducers(filter value) Example</Link> | <Link to="/searchfilterreducers">Search Filter Users In Reducers(data and filter value) Example</Link> <br />
		<Link to="/agridsearch">External Search Filter React AgGrid</Link> <br />
		<Link to="/regex">Regex not allow space in begining and end of string, allow alphabets, special characters -_() and space in between.</Link> <br />
		<Link to="/customselect">Custom Select DropDown with FontAwesome Icons</Link> <br />
		<Link to="/simplegrid">Ag Grid with Export as CSV</Link> <br />
		
    </div>
    )
}

 

const mapStateToProps = (state) => {
    return {
		myCurrentTime: state.currenttimereducer.currentTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		updateTime : () => dispatch(fetchNewTime())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))


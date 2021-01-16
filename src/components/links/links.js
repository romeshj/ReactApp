import React from 'react';
import {BrowserRouter  as Router, Route, Switch , Link} from 'react-router-dom';
import Comp1 from './comp1';
import Comp2 from './comp2';
const Links = (props) => {
   return( 
	<div>
	<Router>
        <ul>
			<li><Link to="/comp1">Comp 1</Link></li>
			<li><Link to="/comp2">Comp 2</Link></li>
		</ul>
		<Route exact path="/comp1" component={Comp1} />
		<Route exact path="/comp2" component={Comp2} />
	</Router>
    </div>
   )
}
export default Links
import React from 'react';
import auth from './auth';

const LandingPage = (props) => {
	const { history } = props;
	console.log(auth);
	const goToPage = () => {
			props.history.push('/protectedroutes/applayout');
    }
 return(	
	  <div>
		<h1 className="title is-1">This is the Home Page</h1>
		<p>
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
		  risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
		  nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
		  lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
		</p>
		<button onClick={goToPage}>Go to Layout Page</button>
	  </div>
	)
};

export default LandingPage;

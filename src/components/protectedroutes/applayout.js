import React from 'react';
import auth from './auth';

const AppLayout = (props) => {
console.log(auth);
const goToPage = () => {
			props.history.push('/protectedroutes/landingpage');
    }
return (
  <div>
    <h1 className="title is-1">This is the Layout Page</h1>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>
	<button onClick={goToPage}>Go to Landing Page</button>
  </div>
)};

export default AppLayout;

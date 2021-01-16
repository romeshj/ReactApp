import React, {Component} from 'react';
import { UsrProvider } from './UserContext'
import UserName from './UserName';
import UserLocation from './UserLocation';
import Form from './form';

class MainPage extends Component{
	constructor(props){	
		super(props);	
	}
		   
   render() {
	   return( 
		<UsrProvider>
			<UserName />
			<UserLocation />
			<Form />
		</UsrProvider>
	   )
   }
}
export default MainPage
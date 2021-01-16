import React, {Component} from 'react';
import { UserProvider } from './UserContext'
import HomePageA from './homepage'

class MainAppA extends Component{
	constructor(props){	
		super(props);	
	}
		   
   render() {
	   return( 
		<UserProvider>
			<HomePageA />
		</UserProvider>
	   )
   }
}
export default MainAppA
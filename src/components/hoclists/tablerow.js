import React, {Component} from 'react';
class Tablerow extends Component{
    constructor(props){
      super(props);
       this.state = {
        data : props.objectdata
      }
    } 

    render(){
	  const { data } = this.state;
	  
      return(
        data.map(d => {
          return (
            <tr><td>{d.id}</td><td>{d.name}</td></tr>
          )
        })
      )
    }
}

export default Tablerow

import React, {Component} from 'react';
const hoc = (WrappedComponent) => {
    return class extends Component{
        render(){
            const newProps = {
                dataA : "MY DATA From Component A",
                dataB : "MY DATA From Component B"
            }
            return (
                <WrappedComponent  {...this.props} {...newProps} />
            );
        }
    }
}
export default hoc
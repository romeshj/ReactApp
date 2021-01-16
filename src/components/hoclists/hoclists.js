import React, {Component} from 'react';

const hoclists = (WrappedComponent, data) => {
    return class extends Component{
        render(){
            const newProps = {
                data: data
            }
            return (
                <WrappedComponent  {...this.props} {...newProps} />
            );
        }
    }
}

export default hoclists;

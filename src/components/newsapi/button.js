import React from 'react';
import {connect} from 'react-redux';
import { newsRecieved } from '../../redux/actions/action-creators';

const Button = (props) => {
        return(
            <div><button onClick={props.loadNews}>GET NEWS</button></div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadNews : () => dispatch(newsRecieved())
    }
}

export default connect(null, mapDispatchToProps)(Button)
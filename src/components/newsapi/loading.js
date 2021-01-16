import React from 'react';
import {connect} from 'react-redux';
import img from '../../images/loading.gif';

const Spinner = (props) => {
    const {loading} = props
    console.log(loading)
    if (loading) {
        return(       
            <div style={{ textAlign: 'center' }}>
             <img src={img} alt='loading' />
             <h1>LOADING</h1>
            </div>
         )
      }
      else {
          return null
      }
}

const mapStateToProps = (state) => {
     return {
        loading: state.newsreducer.loading
    }
}
export default connect(mapStateToProps, null)(Spinner)
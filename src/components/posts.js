import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadPostsData} from '../redux/actions/action-creators';

class Posts extends Component {
    constructor(props){
        super(props);
    }
	
    componentDidMount(){
        this.props.getPostsData();
	}
	
    render(){
        return (
            <div>
                <h3>FETCH DATA USING REDUX</h3>
                <p><Link to="/">Go to Home Page</Link></p>
                <ol>
                    {this.props.posts.map(post =>
                        <li key={post.id}>
                            Title : {post.title} <br />
                            Description : {post.body}
                        </li>
                    )}
                </ol>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
		posts: state.postreducer.posts.slice(0,10)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		getPostsData : () => dispatch(loadPostsData())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Posts)


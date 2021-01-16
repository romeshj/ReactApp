import React, { useReducer, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadPostsData} from '../redux/actions/action-creators';
const PostsHooks = () => {
	const posts = useSelector(state => state.postreducer.posts.slice(0,10));
    const dispatch = useDispatch();
	useEffect(() => {
        dispatch(loadPostsData())
      }, [])
	
	return (
        <div>
            <h3>FETCH DATA USING REDUX Hook (useSelector, useDispatch)</h3>
            <p><Link to="/">Go to Home Page</Link></p>
            <ol>
                {posts.map(post =>
                    <li key={post.id}>
                        Title : {post.title} <br />
                        Description : {post.body}
                    </li>
                )}
            </ol>
        </div>
	)
}

export default PostsHooks
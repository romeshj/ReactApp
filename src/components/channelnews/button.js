import React from 'react'
import { connect } from "react-redux";
import '../../css/news.css';
import {getChannelNews} from '../../redux/actions/action-creators';

const Button = ({channelString, posts, onClickGetChannelNews}) => (
	<div>{console.log(posts)}
    <button className='btn btn-primary btn-lg btn-block' onClick={() => onClickGetChannelNews(channelString)}>Get Top News</button>
	</div>
)

const mapStateToProps = state => {
return {
  channelString: state.channelnewsreducer.channelString,
  posts : state.channelnewsreducer.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
   onClickGetChannelNews: (channelString) => dispatch(getChannelNews(channelString))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

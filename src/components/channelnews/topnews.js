import React from 'react'
import { connect } from "react-redux";
import '../../css/news.css';
import NewsItem from './newsitem'
import loading from '../../images/loading.gif';

const TopNews = ({posts, fetching}) => {
	let topNews = '';
	if(fetching){  topNews = <img src={loading} /> }
	if(posts && posts.length) {
	 topNews = posts.map((post, index) => <NewsItem key={index} post={post} />)
	}
	return(
	<div>
		{topNews}
	</div>
	)
}

const mapStateToProps = (state) => {
	return {
		posts: state.channelnewsreducer.posts,
		fetching : state.channelnewsreducer.fetching
	  };
};

export default connect(mapStateToProps, null)(TopNews);

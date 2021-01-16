import React from 'react'
import '../../css/news.css';

const NewsItem = ({post}) => (
	<article >
    <div className="article-wrapper">
       <h3 className="text-center">{post.title}</h3>
       <img src={post.urlToImage} alt="" />
       <p className="text-center">{post.description}</p>
       <a href={post.url} target="_blank"> read more </a>
    </div>
 </article>
)

export default NewsItem;

import React, { useReducer, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
  };
  const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
  }
const Newsitem = () => {
    const articles = useSelector(state => state.newsreducer.articles);
    console.log(articles)
        return(
            <div>
                {
                    articles ?
                    articles.map((article, index) =>
                        <article style={articleStyle} key={index} >
                        <div>
                            <h1>{article.title}</h1>
                            <img style={imgStyle} src={article.urlToImage} alt="" />
                            <h4>{article.description}</h4>
                            <a href={article.url} target="_blank">READ MORE</a>
                        </div>
                        </article>
					)  : null
                }
            </div>
        )
}
export default Newsitem
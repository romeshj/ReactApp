import React from 'react';
import {connect} from 'react-redux';


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

const Newsitem = (props) => {
    const {articles} =  props;
   
        return(
            <div>
                {
                    articles.map((article, index) =>
                        <article style={articleStyle} key={index} >
                        <div>
                            <h1>{article.title}</h1>
                            <img style={imgStyle} src={article.urlToImage} alt="" />
                            <h4>{article.description}</h4>
                            <a href={article.url} target="_blank">READ MORE</a>
                        </div>
                        </article>

                    )
                }
            </div>
        )

}

const mapStateToProps = (state) => {
     return {
		articles: state.newsreducer.articles
     }
}

export default connect(mapStateToProps, null)(Newsitem)
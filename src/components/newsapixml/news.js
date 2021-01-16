import React, {useState, useEffect} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import '../../css/abnnews.css';

const ABNNews = (props) => {
	console.log(props)
	
	const [post, setPost] = useState([]);
	const [err, seterr] = useState(null);
	const [loading, setloading] = useState(true);
	
	const feed = props.location.state;
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	const url = proxyurl+'https://www.abplive.com'+feed;

	console.log(url)
	
	useEffect(()=>{
	   setloading(true);
		axios.get(url, {		
		headers: new Headers({
			Accept: "text/html",
			"content-type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT",
			"Access-Control-Allow-Headers": "Content-Type",
		}),		
		mode: "no-cors"
		
		}).then(response => {
			console.log(response)
			let p = [];
			const xml = new XMLParser().parseFromString(response.data);
			console.log(xml)
			let news = xml.children[0].children;
			console.log(news)
			news.forEach((element) => {
				
				if(element.children.length > 0){
					//console.log(element)
					p.push(element.children)
				}
			})
			
			console.log(p)
			setPost(p);
			setloading(false);
			
		}).catch(error => {
			console.log(error);
			setloading(false);
			seterr(error);
		});
	},[url])
	
	let posts = post.map((p, index) => (
		<Link
      className="colors"
      key={index}
      to={{
        pathname: `${props.location.pathname}/${index}`,
        customObject: p,
        state: [
          p[0].value,
          p[1].value,
          p[7].value,
          p[9].attributes.url,
          p[3].value,
        ],
        
      }}
    >
	<div className="card" style={{}}>
        <div className="cardhorizontal">
          <div className="img-square-wrapper">
            <img className="" src={p[9].attributes.url} alt="Card  cap" />
          </div>

          <div className="card-body">
            <h4 className="card-title">{p[0].value}</h4>

            <div className="card-text">
              {p[7].value}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            {(p[3].value)}
          </small>
        </div>
      </div>
    </Link>
	))
	
	let rendered;
  let error;
  let errorMsg;
  
  if (err && !loading) {
    error = err.code ? err.code : err.name;
    errorMsg = err.message;
    rendered = (
      <>
        <h2 className="red center">{error}</h2>
        <p className="errorMessage center">{errorMsg}</p>
      </>
    );
  }

  if (loading) {
    rendered = <h2>Loading...</h2>;
  }
  
  if (!loading && posts.length > 0) {
    rendered = <div>{posts}</div>;
  }
	
   return( 
	<div>
		{rendered}
    </div>
   )
}
export default withRouter(ABNNews)

import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
const NewsCategory = (props) => {

	const newsCategory = [
        { id: "home", type: "Home", categoryUrl: "/home/feed" },
        { id: "indianews", type: "India News", categoryUrl: "/news/india/feed" },
        { id: "worldnews", type: "World News", categoryUrl: "/news/world/feed" },
        { id: "entertainment", type: "Entertainment", categoryUrl: "/entertainment/bollywood/feed" },
        { id: "crime", type: "Crime", categoryUrl: "/news/crime/feed" },
        { id: "sports", type: "Sports", categoryUrl: "/sports/feed" },
        { id: "buisness", type: "Buisness", categoryUrl: "/business/feed" },
        { id: "health", type: "Health", categoryUrl: "/lifestyle/health/feed" },
        { id: "technology", type: "Technology", categoryUrl: "/technology/feed" },
        { id: "covid", type: "COVID-19", categoryUrl: "/latest-news/covid-19/feed" },
        { id: "coronavirus", type: "Coronavirus", categoryUrl: "/latest-news/coronavirus/feed" },
      ]
	  
	 
	 
	 const [category, setCategory] = useState(newsCategory);
	 const [selectedCategory, setSelectedCategory] = useState('/home/feed');
	 
   return( 
	<div>
		<ul className='nav nav-tabs'>
			{
				category.map(c => {
					return(
						<li className='nav-item' key={c.id}>
							<NavLink
							className='nav-link'
							to={{
								pathname : `newsapixml/${c.id}`,
								state : `${c.categoryUrl}`
							}}>
							{c.type}
							</NavLink>
						</li>
					)
				})
			}
		</ul>
    </div>
   )
}
export default NewsCategory

import React from 'react';
import {Link} from 'react-router-dom';
import Button from './button';
import Spinner from './loading';
import NewsItem from './newsitem'; 

const news = (props) => {
        return(
            <div>
                <p><Link to="/">Go to Home Page</Link></p>
                <Button />
                <Spinner />
                <NewsItem />
            </div>
        )
}
export default news
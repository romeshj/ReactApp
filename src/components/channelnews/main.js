import React from 'react'
import ChannelsField from './channelsfield'
import Button from './button'
import TopNews from './topnews'
import '../../css/news.css';

const Main = () => (
  <div className="container news">
    <ChannelsField />
	<Button />
	<TopNews />
  </div>
)

export default Main;

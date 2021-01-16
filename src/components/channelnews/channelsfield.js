import React from 'react'
import Channel from './channel';

const ChannelsField = () => (

  <div className="row">
    <Channel channelName="BBC" channelString="bbc-news" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="FT" channelString="financial-times" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="TIME" channelString="time" />
	<Channel channelName="Google News" channelString="google-news" />
	<Channel channelName="Associated Press" channelString="associated-press" />
	<Channel channelName="Politico" channelString="politico" />
  </div>
);

export default ChannelsField;


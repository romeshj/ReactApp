import React from 'react'
import { connect } from "react-redux";
import '../../css/news.css';
import {selectChannelNews} from '../../redux/actions/action-creators';

const Channel = ({channelName, channelString, onClickChannelNews}) => (
	
    <div  className="col-lg-2 col-md-4 col-sm-6">
        <div className="channelbutton" onClick={() => onClickChannelNews(channelString)}>
            <p>{channelName}</p>
			<input type="hidden" value={channelString}/>
        </div>
    </div>
)


const mapDispatchToProps = dispatch => {
  return {
   onClickChannelNews: (channelString) => dispatch(selectChannelNews(channelString))
  };
};

export default connect(null, mapDispatchToProps)(Channel);

import { combineReducers} from 'redux';
import currenttimereducer from './reducer';
import postreducer from './post_reducer';
import dogreducer from './dog_reducer';
import formreducer from './form_reducer';
import olympicreducer from './olympic_reducer';
import channelnewsreducer from './channel_news_reducer';
import usersreducer from './axios_users_reducer';
import newsreducer from './news_reducers';
import piechartreducer from './pie_chart_reducer';
import abnnewsreducer from './abn_news_reducer';
import searchfilterreducer from './search_filter_users_reducer';
import searchfilterreducernew from './search_filter_users_reducer_1';

export default combineReducers({
    currenttimereducer,
	postreducer,
	dogreducer,
	formreducer,
	olympicreducer,
	channelnewsreducer,
	usersreducer,
	newsreducer,
	piechartreducer,
	abnnewsreducer,
	searchfilterreducer,
	searchfilterreducernew
})

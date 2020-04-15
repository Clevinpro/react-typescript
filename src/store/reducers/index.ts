import { History } from 'history';
import { Reducer, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import count from './count';


export default (history: History<any>): Reducer =>
	combineReducers({
		count,
		router: connectRouter(history)
	});


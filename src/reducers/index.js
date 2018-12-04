import { combineReducers } from 'redux';
import tweets from './tweets';
import pareto from './pareto';

const rootReducer = combineReducers({
  tweets,
  pareto
});

export default rootReducer;
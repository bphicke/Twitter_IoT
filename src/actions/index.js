import {
  NEW_TWEET_ACTION,
  PARETO_ACTION
} from '../constants';

export const getTweetsAction = (tweets) => ({
  type: NEW_TWEET_ACTION,
  payload: tweets
});

export const setPareto = (pareto) => ({
  type: PARETO_ACTION,
  payload: pareto
})
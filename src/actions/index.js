import {
  NEW_TWEET_ACTION
} from '../constants';

export const getTweetsAction = (tweets) => ({
  type: NEW_TWEET_ACTION,
  payload: tweets
});
import { NEW_TWEET_ACTION } from '../constants';

const initialState={
  tweets: []
};

export default function tweets(state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case NEW_TWEET_ACTION:
      return {
        ...state,
        tweets: payload
      };
    default:
      return state;
  }
}
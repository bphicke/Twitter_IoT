import { PARETO_ACTION } from '../constants';

const initialState={
  pareto: [{name: '', uv: ''}]
};

export default function pareto(state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case PARETO_ACTION:
      return {
        ...state,
        pareto: payload
      };
    default:
      return state;
  }
}
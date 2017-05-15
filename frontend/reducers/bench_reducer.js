import { merge } from 'lodash';
import { RECEIVE_BENCHES } from '../actions/bench_actions';

const benchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BENCHES:
      return merge({}, action.benches);
    default:
      return state;
  }
};

export default benchReducer;

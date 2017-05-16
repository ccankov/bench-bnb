import { merge } from 'lodash';
import { UPDATE_BOUNDS } from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge({}, action.bounds);
    default:
      return state;
  }
};

export default filterReducer;

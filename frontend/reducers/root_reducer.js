import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import benchReducer from './bench_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  benches: benchReducer,
  filters: filterReducer
});

export default rootReducer;

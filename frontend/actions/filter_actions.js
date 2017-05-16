import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch({ type: UPDATE_BOUNDS, bounds });
  return fetchBenches(getState().filters)(dispatch);
};

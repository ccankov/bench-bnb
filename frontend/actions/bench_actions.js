import * as APIUtil from '../util/bench_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  APIUtil.fetchBenches().then(
    benches => dispatch(receiveBenches(benches)),
    errors => dispatch(receiveErrors(errors.reponseJSON))
  )
);

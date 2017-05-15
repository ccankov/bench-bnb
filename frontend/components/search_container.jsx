import { connect } from 'react-redux';

import { allBenches } from '../reducers/selectors';
import { fetchBenches } from '../actions/bench_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  benches: allBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

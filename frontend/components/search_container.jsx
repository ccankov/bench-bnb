import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';
import Search from './search';

const mapStateToProps = ({ benches }) => ({
  benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

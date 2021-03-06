import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => (
  {
    session: state.session
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

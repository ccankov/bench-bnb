import React from 'react';

import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    let benches = Object.keys(this.props.benches).map(benchId => (
      <BenchIndexItem key={benchId} bench={this.props.benches[benchId]} />
    ));
    return (
      <ul>
        { benches }
      </ul>
    );
  }
}

export default BenchIndex;

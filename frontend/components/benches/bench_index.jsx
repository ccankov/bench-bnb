import React from 'react';

import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    if (Object.keys(this.props.benches).length === 0) {
      this.props.fetchBenches();
    }
  }

  render() {
    let benches = this.props.benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));
    return (
      <ul>
        { benches }
      </ul>
    );
  }
}

export default BenchIndex;

import React from 'react';
import BenchMap from './benches/bench_map';
import BenchIndex from './benches/bench_index';

const Search = ({ fetchBenches, updateBounds, benches }) => (
  <div>
    <BenchMap benches={ benches } updateBounds={ updateBounds }/>
    <BenchIndex fetchBenches={ fetchBenches } benches={ benches } />
  </div>
);

export default Search;

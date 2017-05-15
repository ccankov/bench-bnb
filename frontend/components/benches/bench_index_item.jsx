import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li>
    <div>
      <span><strong>Description:</strong> { bench.description }</span>
      <br />
      <span><strong>Latitude:</strong> { bench.lat }</span>
      <br />
      <span><strong>Longitude:</strong> { bench.lng }</span>
    </div>
  </li>
);

export default BenchIndexItem;

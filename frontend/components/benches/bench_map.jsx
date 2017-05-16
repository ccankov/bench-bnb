import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapIdle = this.handleMapIdle.bind(this);
  }

  handleMapIdle() {
    let mapBounds = this.map.getBounds();
    let bounds = {
      northEast: {
        lat: mapBounds.getNorthEast().lat(),
        lng: mapBounds.getNorthEast().lng(),
      },
      southWest: {
        lat: mapBounds.getSouthWest().lat(),
        lng: mapBounds.getSouthWest().lng(),
      }
    };
    this.props.updateBounds(bounds);
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    // wrap the mapDOMNode in a Google Map
    this.map = new window.google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.map.addListener('idle', this.handleMapIdle);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(
      this.props.benches
    );
  }

  render() {
    return (
       // this ref gives us access to the map dom node
      <div id="map-container"
           ref={ map => { this.mapNode = map; } }></div>
    );
  }
}

export default BenchMap;

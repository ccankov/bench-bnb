export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    this.markers[bench.id] = new window.google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map: this.map,
      title: bench.description,
      id: bench.id
    });
  }

  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

  updateMarkers(benches) {
    Object.keys(benches).forEach(benchId => {
      if (!this.markers[benchId]) {
        this.createMarkerFromBench(benches[benchId]);
      }
    });
    Object.keys(this.markers).forEach((markerId => {
      if (!benches[markerId]) {
        this.removeMarker(this.markers[markerId]);
      }
    }).bind(this));
  }
}

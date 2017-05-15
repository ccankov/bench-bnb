export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    this.markers[bench.id] = new window.google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map: this.map,
      title: bench.description
    });
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      if (!this.markers[bench.id]) {
        this.createMarkerFromBench(bench);
      }
    });
  }
}

(function (window) {
  var L = window.L;
  var mapboxgl = window.mapboxgl;
  var $ = window.$;

  window.MapService = function MapService() {
    var service = this;

    service.Lmap = undefined;
    service.Mbmap = undefined;
    service.timelineEvent = null;
    service.baseStyle = {
      version: 8,
      attributionControl: true,
      sources: {
        tiles_mb: {
          type: 'raster',
          tiles: ['data/tiles/tiles_mb/{z}/{x}/{y}.png'],
          scheme: 'tms',
          tileSize: 256
        }
      },
      layers: [
        {
          id: 'tiles_mb',
          type: 'raster',
          source: 'tiles_mb',
          minzoom: 1,
          maxzoom: 5
        }
      ]
    };

    service.createLeafletMap = function createLeafletMap(options) {
      service.Lmap = L.map('map', options);
    };

    service.createMapboxGlMap = function createMapboxGlMap() {
      var bounds = [[-100, 0], [20, 80]];

      mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb3V0aW4iLCJhIjoiY2lxMmN3MDdjMDA0d2hybTIxOTYxa2c3MCJ9.T5MEIB6UqZLg3_DL4YqDCQ';


      service.Mbmap = new mapboxgl.Map({
        container: 'map',
        zoom: 3,
        maxZoom: 4,
        maxBounds: bounds,
        center: [-70, 37],
        style: service.baseStyle,
        attributionControl: {
          position: 'bottom-right'
        }
      });
    };

    service.animateTimeline = function animateTimeline(ev) {
      var target = ev.target;
      var percent = target.currentTime / target.duration * 100;
      var progressBar = $('.timeline-progress');
      progressBar.css({
        width: percent + '%'
      });
    };
  };
}(window));


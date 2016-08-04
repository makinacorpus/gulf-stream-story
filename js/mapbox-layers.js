(function (window) {
  window.MapboxLayers = function MapboxLayers() {
    this.video_current = {
      type: 'video',
      urls: [
        'https://makinacorpus.github.io/gulf-stream-story/data/video/current.mp4'
      ],
      coordinates: [
          [-100, 80],
          [20, 80],
          [20, 0],
          [-100, 0]
      ]
    };

    this.video_temp = {
      type: 'video',
      urls: [
        'https://makinacorpus.github.io/gulf-stream-story/data/video/temperature.mp4'
      ],
      coordinates: [
          [-100, 80],
          [20, 80],
          [20, 0],
          [-100, 0]
      ]
    };

    this.video_salinity = {
      type: 'video',
      urls: [
        'https://makinacorpus.github.io/gulf-stream-story/data/video/salinity.mp4'
      ],
      coordinates: [
          [-100, 80],
          [20, 80],
          [20, 0],
          [-100, 0]
      ]
    };

    this.video_wind = {
      type: 'video',
      urls: [
        'https://makinacorpus.github.io/gulf-stream-story/data/video/wind.mp4'
      ],
      coordinates: [
          [-100, 80],
          [20, 80],
          [20, 0],
          [-100, 0]
      ]
    };


    this.mapboxMarkers = {
      temperature_sampling: {
        coordinates: [-20, 40],
        label: 'Point de mesure de la température'
      }
    };
  };
}(window));
